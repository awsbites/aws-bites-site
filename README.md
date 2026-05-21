# AWS Bites Site

[![Build](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8a203404-ec39-4d29-902f-83a51705af00/deploy-status)](https://app.netlify.com/sites/boring-bohr-998eda/deploys)


Static website source code for [awsbites.com](https://awsbites.com). 

## Requirements

Needs a recent version of Node.js (recommended 14+).

Install all the needed dependencies with:

```bash
npm install
```

## Dev server

Run the dev server with:

```bash
npm start
```

This will give you a URL for a local live server

To preview unpublished episodes with a future `publish_date`, run:

```bash
INCLUDE_FUTURE_EPISODES=true npm start
```


## Publishing a New Episode

1. Add a new Markdown file in `src/episodes/`, using the episode number and a short slug, for example `src/episodes/154-s3-files.md`.

2. Add the front matter:

```yaml
---
episode: 154
title: "S3 Files"
youtube_id: "lqw92QYqM88"
spotify_link: "https://creators.spotify.com/pod/profile/aws-bites/episodes/154--S3-Files-e3jjauo"
publish_date: 2026-05-22
---
```

3. Get the YouTube ID before the video is public:

   - Open the scheduled video in YouTube Studio.
   - The Studio URL contains the ID, usually as `https://studio.youtube.com/video/<youtube_id>/edit`.
   - Copy only the `<youtube_id>` segment into the episode front matter.

4. Get the Spotify episode ID from Spotify for Podcasters:

   - Open the Episodes page in Spotify for Podcasters.
   - Open browser DevTools and paste this into the Console. ⚠️ Edit `episodeTitle` before pressing Enter:

```js
(() => { var episodeTitle = "154."; var rows = Array.from(document.querySelectorAll("tr[data-cy^='episode-']")); var row = rows.find(function (row) { return row.textContent.indexOf(episodeTitle) !== -1; }); if (!row) { console.error("Could not find an episode row matching: " + episodeTitle); console.table(rows.map(function (row) { return { dataCy: row.getAttribute("data-cy"), text: row.textContent.trim().replace(/\s+/g, " ").slice(0, 120) }; })); return; } var dataCy = row.getAttribute("data-cy"); var spotifyEpisodeId = dataCy.replace(/^episode-/, ""); var link = row.querySelector("a[data-encore-id='textLink']"); var title = link && link.textContent ? link.textContent.trim() : episodeTitle; var spotifySlug = title.replace(/['\u2019]/g, "").replace(/[^A-Za-z0-9()]/g, "-").replace(/^-+|-+$/g, ""); var spotifyLink = "https://creators.spotify.com/pod/profile/aws-bites/episodes/" + spotifySlug + "-" + spotifyEpisodeId; var result = { title: title, dataCy: dataCy, spotifyEpisodeId: spotifyEpisodeId, spotifyLink: spotifyLink }; console.table([result]); console.log(spotifyLink); window.spotifyEpisodeLookup = result; if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(spotifyLink).then(function () { console.log("Copied spotifyLink to the clipboard"); }).catch(function () { console.log("Clipboard copy failed; copy spotifyLink from the output above"); }); } return result; })()
```

   - The script reads the row attribute, for example `data-cy="episode-e3jjauo"`, extracts `e3jjauo`, and generates:

```text
https://creators.spotify.com/pod/profile/aws-bites/episodes/154--S3-Files-e3jjauo
```

   - The generated link is logged to the console and saved as `window.spotifyEpisodeLookup`. It also tries to copy the link to the clipboard.

5. Add the transcript data under `src/_transcripts/` when available, for example `src/_transcripts/154.json` and `src/_transcripts/154.vtt`.

6. Add the episode thumbnail under `src/_includes/images/episodes/`, for example `src/_includes/images/episodes/154.jpg`. If it is missing, the build will try to fetch the YouTube thumbnail and fall back to the default image if YouTube has not exposed it yet.

7. Preview future-dated episodes locally with:

```bash
INCLUDE_FUTURE_EPISODES=true npm start
```

Without `INCLUDE_FUTURE_EPISODES=true`, future-dated episodes still build at their direct URL, but they are excluded from the homepage, feed, sitemap, and episode previous/next navigation.


## Build

Simply run:

```bash
npm run build
```

The static assets will be made available in `dist/`.

This is an incremental build, so old files that might not be needed anymore will still be in `dist/`.

If you need to perform a clean build, you can run:

```bash
npm run clean && npm run build
```


## Deploy

Deployment happen automatically through GitHub Actions.

There are 3 different ways to trigger a deployment:

  - **On push**: Every time a new push to the `main` branch is made a deployment is started.
  - **On schedule**: A new build and deployment of the current `main` branch is done automatically **every Friday at 00:01**.
  - **On demand**: You can trigger the [`deploy` workflow](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml) manually.
