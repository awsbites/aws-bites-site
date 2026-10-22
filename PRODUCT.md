# AWS Bites

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cloud practitioners looking for practical AWS knowledge, experience, and opinions. The website serves prospective listeners discovering the podcast and returning listeners finding relevant episodes.

## Product Purpose

AWS Bites is a podcast hosted by Eoin Shanaghy and Luciano Mammino about AWS and cloud computing. The website introduces the show, makes its episode archive discoverable, and connects visitors to ways to watch, listen, and subscribe.

The primary website priority, confirmed by the owner, is attracting new listeners and subscriptions. Episode discovery and consumption support that priority. Numeric targets and the definition of a measured subscription conversion remain open.

There is no committed episode release cadence. Public-facing copy must not promise a specific weekday or publishing interval.

## Positioning

The show shares the hosts' practical AWS experience, real-world case studies, and candid opinions. This description is supported by the current homepage and site settings; no exclusive market position or comparative claim has been established.

## Operating Context

Visitors can browse episodes, search episode descriptions and available transcripts, watch embedded YouTube videos, read episode notes and transcripts, and follow links to podcast platforms or RSS.

Maintainers publish Markdown episodes in `src/episodes/`, with episode metadata, optional transcript JSON and VTT files in `src/_transcripts/`, and thumbnails in `src/_includes/images/episodes/`. See `README.md` for the publishing workflow.

## Capabilities and Constraints

- Preserve existing content and URLs during future design work. This includes episode notes, transcripts, resource links, and episode permalinks.
- The existing implementation uses Eleventy, Nunjucks, Tailwind CSS, and Pagefind. Search indexes episode descriptions and available transcripts.
- Transcripts are available for some episodes; timestamp interactions can seek within the embedded video.
- The site is generated into `dist/`; durable changes belong in source templates, content, or styles rather than generated output.
- `npm start` runs the development server and CSS watcher; `npm run build` generates the production site.
- Future-dated episodes remain accessible at their direct URLs but are excluded from the homepage, episode feed, sitemap, and previous/next navigation unless `INCLUDE_FUTURE_EPISODES=true` is set for preview.

## Brand Commitments

AWS Bites is the current name, and Eoin Shanaghy and Luciano Mammino are the current hosts. Existing copy uses a practical, conversational voice. These are descriptions of the current product; the owner has left commitments beyond preserving content and URLs open. No new visual direction or binding voice requirement was selected during init.

## Evidence on Hand

- `src/index.njk`: current podcast introduction, audience description, and listening links.
- `src/_data/settings.js`: site description and configured podcast-platform destinations. Presence in configuration does not establish that every external destination remains active.
- `src/episodes/`: actual episode descriptions, metadata, and linked resources.
- `src/_transcripts/`: available transcripts and speaker information.
- `src/_includes/images/episodes/`: existing episode thumbnails.
- `src/_includes/images/logo.svg` and `src/_includes/images/logo-square.png`: existing identity assets.

No audience size, growth results, testimonials, comparative benchmarks, or conversion targets were confirmed during init. Future work must use verified evidence for such claims.

## Product Principles

- Prioritize helping new visitors become listeners and subscribers.
- Use actual episode content to explain the value of the show.
- Keep relevant episodes and their listening destinations easy to find.
- Preserve existing content and URLs as the interface evolves.

## Open Decisions

- Brand and voice commitments beyond content and URL preservation.
- Product-specific accessibility requirements; no standard was selected during init.
- Subscription measurement, conversion definitions, and success targets.
