---
description: Generate a new episode file from YouTube metadata
---

I'll help you create a new episode file for episode {{arg1}}.

**Required Information:**

Please provide the following details:

1. **Episode Title**: (e.g., "Is ECS Managed Instances better than Fargate?")
2. **YouTube Video ID**: (e.g., "LtuUV_FDQlQ" - the ID from the YouTube URL)
3. **Spotify Episode ID**: (e.g., "e38dg01" or "episode-e38dg01" - just the ID part)
4. **YouTube Description**: (Paste the full YouTube episode description below)

---

**Process:**

1. I'll parse the YouTube description to extract:
   - **Intro paragraphs**: Everything before `💰 SPONSOR` (or similar marker)
   - **Sponsor section**: Text between `💰 SPONSOR` and next section (`🔖 Chapters` or `📚 Resources`)
   - **Resources**: Links from the `📚 Resources` section

2. I'll calculate the publish date:
   - Default: Next Friday from today
   - I'll ask you to confirm or provide a different date

3. I'll generate a slug from the title:
   - Lowercase, hyphenated, special characters removed
   - Format: `{episode_number}-{slug}.md`

4. I'll generate the Spotify link from the episode ID:
   - Strip "episode-" prefix if present from the provided ID
   - Slugify the title for Spotify (preserve capitals, replace spaces with hyphens)
   - Format: `https://creators.spotify.com/pod/profile/aws-bites/episodes/{episode_number}--{Title-Slug}-{id}`
   - Example: Title "Headless CMS on AWS", ID "e38dg01", Episode 149
     → `https://creators.spotify.com/pod/profile/aws-bites/episodes/149--Headless-CMS-on-AWS-e38dg01`

5. I'll create the episode file at: `src/episodes/{number}-{slug}.md`

**Episode File Structure:**

```markdown
---
episode: {number}
title: "{title}"
youtube_id: "{id}"
spotify_link: "{link}"
publish_date: {YYYY-MM-DD}
---

{Intro paragraphs from YouTube description}

> {Sponsor text formatted as blockquote}

In this episode, we mentioned the following resources:

{Resources list from YouTube description}
```

**Important Notes:**

- The sponsor text will be formatted as a markdown blockquote (lines starting with `>`)
- Resources will be extracted from the `📚 Resources` section
- I'll show you a preview before creating the file
- If sections are missing or incorrectly parsed, I'll help you manually adjust

**Next Steps:**

1. Provide the title, YouTube ID, Spotify episode ID, and paste the full YouTube description
2. Review the parsed sections and confirm they look correct
3. Confirm or adjust the publish date
4. Review the final file preview
5. I'll create the file when you approve

Please provide the episode details now.
