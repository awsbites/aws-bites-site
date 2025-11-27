# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AWS Bites is a podcast website built with 11ty (Eleventy) static site generator, Tailwind CSS, and Nunjucks templating. The site features 150+ episodes with transcripts, search functionality via Orama, and automated deployment to Netlify.

## Common Commands

### Development
```bash
npm start                    # Start dev server (11ty + Tailwind watch)
npm run build                # Production build (minified HTML + optimized CSS)
npm run clean && npm run build  # Clean build from scratch
```

### Transcript Processing
```bash
node bin/transcript-to-vtt.js src/_transcripts/{episode}.json  # Convert JSON transcript to VTT
/fix-transcript {episode}    # Claude command to review and fix transcript errors
```

The transcript-to-vtt.js script is automatically run by a pre-commit hook when transcript JSON files are modified.

## Architecture

### Directory Structure

- **`src/episodes/`** - Episode markdown files with frontmatter (title, youtube_id, spotify_link, publish_date)
- **`src/_transcripts/`** - Transcript data in JSON format (145+ episodes)
  - JSON structure: `{ speakers: {...}, segments: [{speakerLabel, start, end, text}] }`
  - VTT files are auto-generated from JSON via pre-commit hook
- **`src/_includes/`** - Nunjucks templates and components
  - `base.njk` - Base HTML template
  - `episodes_layout.njk` - Episode-specific layout with transcript tabs
- **`src/_data/`** - Global data files
  - `settings.js` - Site config, podcast links, analytics, Orama search API
  - `transcripts.js` - Transcript processing logic (parses JSON, groups by speaker, creates paragraphs)
- **`bin/`** - Utility scripts
- **`dist/`** - Build output (git-ignored)

### Transcript Processing Pipeline

1. JSON transcript placed in `src/_transcripts/{episode}.json`
2. Pre-commit hook detects changes and runs `bin/transcript-to-vtt.js`
3. Generated VTT file auto-committed alongside JSON
4. At build time, `transcripts.js` processes all JSONs:
   - Groups segments by speaker
   - Creates readable paragraphs (150-400 chars, respecting sentence boundaries)
   - Formats timestamps for display

**Transcript JSON format:**
```json
{
  "speakers": {
    "spk_0": "Eoin",
    "spk_1": "Luciano"
  },
  "segments": [
    {
      "speakerLabel": "spk_0",
      "start": 0.0,
      "end": 11.66,
      "text": " Segment text here"
    }
  ]
}
```

**Important:** Speaker names should be "Eoin" and "Luciano", not generic labels like "spk_0" or "Speaker 1".

### Episode Structure

Episodes are markdown files in `src/episodes/` with YAML frontmatter:

```yaml
---
episode: 150
title: "Episode Title"
youtube_id: "YouTubeVideoID"
spotify_link: "https://spotify.com/..."
publish_date: 2024-11-27
---

Episode description in markdown...
```

### Eleventy Configuration

- Input: `src/`
- Output: `dist/`
- Template formats: Nunjucks (NJK), Markdown (MD)
- Collections: Published episodes filtered by `publish_date <= today`
- Plugins: YouTube embed, image optimization
- Filters: Date formatting (luxon), HTML stripping (striptags)

### Styling

Tailwind CSS with custom color palette:
- Primary: Purple (#6E6AFC - #5D0DEC)
- Secondary: Gold (#F7E5AE - #BFA017)
- Accent: Magenta (#F4E3FF - #FD1BFF)
- Dark mode enabled via `class` strategy
- Typography plugin for prose styling

## Deployment

### CI/CD Pipeline

Automated via GitHub Actions (`.github/workflows/deploy.yml`):

**Triggers:**
- Push to `main` branch
- Pull requests (preview deployment)
- Manual dispatch
- Weekly schedule: Every Friday at 00:01

**Process:**
1. Build with Node 18
2. Run `npm run build`
3. Deploy to Netlify (production on main, preview aliases on branches)
4. Trigger Orama search index redeployment via webhook

**Netlify hosting:** Production site at awsbites.com

### Pre-commit Hooks

Husky hook (`.husky/pre-commit`) automatically:
- Detects transcript JSON changes
- Generates corresponding VTT files
- Adds VTT files to the commit

## Search Integration

Orama Cloud search engine:
- API endpoint: `https://cloud.orama.run/v1/indexes/podcast-episodes-ibb4vk`
- Web component for search UI
- Index rebuilt on deployment via curl webhook

## Key Dependencies

- **@11ty/eleventy** - Static site generation
- **tailwindcss** - Utility-first CSS framework
- **node-webvtt** - WebVTT format compilation
- **luxon** - Date/time formatting
- **sharp** - Image processing
- **axios** - HTTP client for fetching YouTube previews

## Development Notes

### Adding a New Episode

1. Create `src/episodes/{number}-{slug}.md` with frontmatter
2. Add transcript JSON to `src/_transcripts/{number}.json` (if available)
3. Pre-commit hook will auto-generate VTT file
4. Build will process and deploy automatically on push to main

### Fixing Transcript Errors

Use the Claude command: `/fix-transcript {episode_number}`

This will:
- Review the JSON transcript for common errors (transcription mistakes, technical terms, formatting)
- Verify speaker names are set correctly
- Present findings for review before making changes
- Suggest running the VTT conversion script after fixes

### Incremental Builds

Eleventy supports incremental builds, so `dist/` may contain old files. Use `npm run clean && npm run build` for a fresh build when needed.
