# AWS Bites technical interface audit

Date: 2026-10-22. Scope: shared shell, homepage, episode layout, transcript interactions, search styling, and image pipeline.

## Implementation integrity verdict

**Fails the technical quality gate, while retaining a coherent product-specific structure.** The archive, episode notes, listening destinations, transcripts, and search serve the podcast directly. However, conditional transcript markup is paired with unconditional initialization, and tab initialization overwrites unrelated fragment URLs. Both failures were reproduced using the actual inline script in isolated Node VM checks with minimal DOM stubs.

The bundled Impeccable detector (`impeccable detect src --json`) completed successfully and returned `[]`. There are no detector findings to confirm or dismiss. This static result does not certify accessibility or interactive behavior, especially in Nunjucks templates.

## Audit health score

These are **provisional source-level scores**, not a WCAG conformance assessment or measured browser performance result.

| Dimension | Score | Key finding |
|---|---:|---|
| Accessibility | 1/4 | Transcript seeking is unavailable from the keyboard; listening-link contrast fails AA. |
| Performance | 3/4 | Optimized images and static output; YouTube loads eagerly on episode visits. |
| Theming | 2/4 | Shared palette and search theme variables exist; initialization occurs late and toggle state is not exposed. |
| Responsive design | 2/4 | Responsive grids exist; 40px theme target and heavy mobile navigation padding need attention. Rendered behavior unverified. |
| Implementation integrity | 2/4 | Reproduced conditional-initialization and fragment-navigation defects. |
| **Total** | **10/20** | **Acceptable band: significant work needed.** |

## Executive summary

Nine findings: **0 P0, 3 P1, 6 P2, 0 P3**. Prioritize keyboard transcript access, listening-link contrast, and accessible panel state. Then address conditional initialization, deep links, landmarks, theme initialization, mobile spacing, and video loading.

The website's confirmed priority is attracting new listeners and subscriptions. The low-contrast listening link directly affects that path. Preserve existing content and URLs while addressing these findings.

## Detailed findings

### 1. [P1] Transcript seeking is mouse-only

- **Location:** `src/_includes/episodes_layout.njk:87` and `:153`.
- **Category:** Accessibility.
- **Evidence:** Segments are plain `span` elements; the player-ready handler adds only a click listener. No focusability, keyboard activation, or control semantics are supplied.
- **Impact:** Keyboard and assistive-technology users cannot use the transcript's seek action.
- **Standard:** WCAG 2.1.1 Keyboard; 4.1.2 Name, Role, Value.
- **Recommendation:** Provide native, named seek controls with keyboard activation and visible focus. Avoid forcing users to tab through every sentence without a considered navigation model.
- **Suggested command:** `$impeccable harden transcript interactions`.

### 2. [P1] The episode listening link has insufficient light-theme contrast

- **Location:** `src/_includes/episodes_layout.njk:24` and `:30`; `tailwind.config.js` primary palette.
- **Category:** Accessibility / Theming.
- **Evidence:** `text-primary-100` is `#6E6AFC` on `bg-slate-300`. Against the standard slate-300 value `#CBD5E1`, the calculated sRGB contrast is **2.76:1**. The current Tailwind slate-300 token is close to this value; confirm the precise generated value after rebuilding. The contrast deficit is substantial and fails even the 3:1 large-text threshold.
- **Impact:** The route from an episode to listening is difficult to read for people with low vision.
- **Standard:** WCAG 1.4.3 Contrast (Minimum).
- **Recommendation:** Use a darker foreground token that reaches at least 4.5:1 on the actual background; verify default, hover, and both themes after rebuilding.
- **Suggested command:** `$impeccable colorize episode listening links`.

### 3. [P1] Description/transcript panels expose no selected or controlled state

- **Location:** `src/_includes/episodes_layout.njk:41`, `:74`, and `:168`.
- **Category:** Accessibility.
- **Evidence:** Links act as tabs, suppress native fragment navigation, and show/hide panels using inline display styles. There are no tab/tabpanel roles, `aria-selected`, or `aria-controls`; active state is conveyed through classes alone. The transcript panel also sits outside the main landmark.
- **Impact:** Assistive technology cannot identify the selected panel or its control relationship. Landmark navigation can miss the transcript content.
- **Standard:** WCAG 1.3.1 Info and Relationships; 4.1.2 Name, Role, Value.
- **Recommendation:** Implement a complete accessible tab interaction, including keyboard behavior and panel relationships, or retain native section links and display both sections. Keep the reading content within the main landmark.
- **Suggested command:** `$impeccable harden episode panels`.

### 4. [P2] Episodes without transcripts throw during initialization

- **Location:** `src/_includes/episodes_layout.njk:41` and `:168–194`.
- **Category:** Implementation Integrity.
- **Evidence:** Eight Markdown episodes have no matching transcript JSON, including episodes 49–53 and the three episode-13 specials. Their tab controls are omitted. `showTab()` still executes, selects `tabBtns[0]`, and calls `getAttribute` on undefined. Executing the template's actual script with an empty tab collection reproduced `TypeError: Cannot read properties of undefined (reading 'getAttribute')`.
- **Impact:** The DOMContentLoaded handler aborts before subsequent setup, including YouTube API script insertion. The static description and ordinary embedded video remain available; this does not block all playback.
- **Standard:** Functional robustness; no specific WCAG failure asserted independently.
- **Recommendation:** Skip panel initialization when no controls exist, and initialize the video API independently when needed.
- **Suggested command:** `$impeccable harden episodes without transcripts`.

### 5. [P2] Tab initialization discards ordinary section fragments

- **Location:** `src/_includes/episodes_layout.njk:168–207`.
- **Category:** Implementation Integrity.
- **Evidence:** An unrecognized hash defaults to the Description control, then unconditionally calls `history.replaceState` with `#description`. A stubbed execution of the actual script changed `/episode/#a-resource-heading` to `/episode/#description` before later event setup.
- **Impact:** Links to headings within descriptions lose their fragment and cannot reliably preserve their intended destination. The handler also intercepts subsequent unrelated hash changes.
- **Standard:** Existing URL preservation requirement in `PRODUCT.md`.
- **Recommendation:** Treat only recognized panel fragments as panel switches. Preserve ordinary anchors and show their containing panel without replacing the destination fragment.
- **Suggested command:** `$impeccable harden episode fragment navigation`.

### 6. [P2] The homepage main landmark excludes the podcast introduction

- **Location:** `src/index.njk:8–95`; shared header at `src/_includes/base.njk:69`.
- **Category:** Accessibility.
- **Evidence:** The homepage's `main` begins at the episode archive, after the show introduction and prominent listening destinations. The shared header is a generic div, and no skip link is provided.
- **Impact:** Visitors navigating directly to the main landmark bypass the introductory content and key listening actions. Keyboard visitors also lack a direct bypass link.
- **Standard:** Landmark organization supports WCAG 1.3.1 and 2.4.1; a missing skip link alone is not treated as proof of failure because landmarks can provide a bypass mechanism.
- **Recommendation:** Put the introduction and archive in the main landmark, use a header landmark for shared chrome, and provide a visible-on-focus skip link.
- **Suggested command:** `$impeccable harden page landmarks`.

### 7. [P2] Theme initialization is late and state is not announced

- **Location:** `src/_includes/base.njk:88` and `:159–224`.
- **Category:** Theming / Accessibility.
- **Evidence:** The page has no initial dark class; the preference is applied by a script after the footer. The button's accessible label remains “Toggle Dark Mode” in either state and has no pressed state. Storage reads and writes are unguarded, so storage denial can abort the theme script.
- **Impact:** A light first paint is possible for dark-theme users; screen readers cannot determine the selected theme from the control. Storage restrictions can prevent initialization from completing. A visible flash was not measured.
- **Standard:** WCAG 4.1.2 for a toggle implemented without its state.
- **Recommendation:** Resolve the initial theme before painting, handle storage failures, and expose the current state or next action through the control's accessible name/state.
- **Suggested command:** `$impeccable harden theme switching`.

### 8. [P2] Small theme target and excessive narrow-screen navigation padding

- **Location:** `src/_includes/base.njk:88`; `src/_includes/episodes_layout.njk:99–104`.
- **Category:** Responsive Design.
- **Evidence:** The theme button requests `w-10 h-10`, or 40×40px at the default root size. Previous/next navigation uses unqualified `px-16`, reserving 128px horizontally, followed by another 48px inside each card. At a 320px viewport this leaves about 144px for card text before other constraints.
- **Impact:** The theme target falls below the skill's 44px comfort target; long episode titles have little mobile reading width. No actual overflow or gesture failure is claimed.
- **Standard:** 44×44px is the WCAG 2.5.5 AAA target and a usability recommendation here; 40px alone does not violate the 24px WCAG 2.5.8 AA minimum.
- **Recommendation:** Increase the theme button hit area to at least 44px and apply reduced horizontal padding below small breakpoints. Check long titles, 320/390px widths, and text scaling in a browser.
- **Suggested command:** `$impeccable adapt shared header and episode navigation`.

### 9. [P2] Every episode visit immediately loads a YouTube embed

- **Location:** `src/_includes/episodes_layout.njk:33–35` and `:210–216`.
- **Category:** Performance.
- **Evidence:** The iframe has an immediate YouTube `src`, with no lazy loading or click-to-load facade. Transcript-capable pages also load the player API during initialization. Visitors reading notes or following podcast links pay the embed cost without requesting video playback.
- **Impact:** Third-party work can compete with reading and listening-platform discovery, especially on constrained connections. Network transfer, LCP, INP, and layout shifts were not measured.
- **Recommendation:** Evaluate an accessible poster/play facade, loading the iframe and API on playback or seeking intent. Preserve transcript seek behavior and provide a normal YouTube destination.
- **Suggested command:** `$impeccable optimize episode video loading`.

## Patterns and systemic issues

- Content-dependent markup and unconditional JavaScript initialization have diverged. Test transcript and no-transcript episodes separately.
- Visual state is implemented through CSS classes without consistently expressing equivalent accessible state.
- Shared palette tokens exist, but search colors repeat literal values and tab active colors use an independent blue palette. This is a maintenance concern, not proof that every literal color is wrong: platform-brand button colors are deliberate candidates for exceptions.
- Mobile breakpoints are used extensively, but some fixed padding and target sizes bypass those responsive choices.

## Positive findings

- Static generation keeps the site's own runtime relatively small.
- The image pipeline produces AVIF/JPEG alternatives and applies lazy loading and asynchronous decoding to archive thumbnails.
- Episode grids adapt across one, two, three, and four columns.
- Pagefind has explicit light/dark variables, a visible focus outline on results, and custom ArrowUp/ArrowDown/Escape navigation.
- Episode embeds have a title; logo home links have accessible names; the document declares its language and viewport.
- Genuine episode notes, transcripts, host information, and thumbnails support the site's purpose without fabricated proof.
- No animation-heavy code or custom drag interaction was found in the audited templates; no reduced-motion defect is asserted simply because a media query is absent.

## Verification and limitations

- Inspected current source and product requirements; ran the bundled static detector.
- Used isolated Node VM reproductions for the empty-tab crash and fragment replacement. These verify logic paths, not full browser behavior.
- Calculated contrast from color values; precise current generated CSS remains to be checked.
- No connected browser was available. No local dev server or installed project dependencies were present. No screenshot fixtures were found.
- Existing `dist/style.css` uses older Tailwind output conventions that differ from the current Tailwind 4 source configuration. It was treated as stale, not authoritative rendered evidence.
- Did not run a fresh build, browser accessibility-tree checks, screenshots, viewport/zoom checks, touch synthesis, screen-reader testing, Lighthouse, or live external-link verification. No claims of full AA conformance, actual mobile overflow, broken touch gestures, or measured page speed are made.
- Interface source and existing content were left unchanged.

## Recommended actions

1. **[P1] `$impeccable harden episode interactions`** — keyboard seeking, panel semantics, conditional initialization, fragment preservation, landmarks, and theme state.
2. **[P1] `$impeccable colorize episode listening links`** — correct and verify listening-link contrast in both themes.
3. **[P2] `$impeccable adapt shared header and episode navigation`** — target sizes, mobile spacing, long titles, and text scaling.
4. **[P2] `$impeccable optimize episode video loading`** — defer third-party video work while preserving playback and seeking.
5. **`$impeccable polish`** — finish with rendered checks once a browser and a fresh build are available.

You can ask me to run these one at a time, all at once, or in any order you prefer. Re-run `$impeccable audit` after fixes to reassess the score.
