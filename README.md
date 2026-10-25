# Samarth Dubey — Minecraft Portfolio

A responsive static portfolio built with semantic HTML, CSS, and vanilla JavaScript. The five pages are separate documents and have no build step, backend, or API credentials. Internal links swap the page's main content in the same document so one music player can keep playing; each page URL also works when opened directly.

## Pages and files

```text
index.html                  Home and centered item-sprite hero
about.html                  Introduction and education sign
skills.html                 Technical advancement cards and milestones
work.html                   Projects and detail dialogs
contact.html                Contact information and animated sign links
style.css                   Shared layout, backgrounds, responsive styles, animation
script.js                   Shared content data and page-specific interactions
assets/bg/download.png      Supplied Minecraft landscape
assets/sprites/new assets/  Supplied heart and inventory art; unused character originals
assets/sprites/audio/       Supplied background-music MP3
assets/sprites/external/    Preserved, unused MCRender renders + SOURCES.md
assets/sprites/wooden sign/ Supplied transparent signboard and post
assets/sprites/Fontforname/ Supplied Minecraft.ttf (Home name only)
```

Supplied assets are preserved in their existing folders. Home uses the supplied transparent heart, diamond, and diamond sword PNGs. Character and mob images remain on disk but are not loaded into the website's decorative composition.

An exact-file and decoded-pixel duplicate scan of `assets/` found no duplicate images, so no supplied files were removed. Unused original Steve and Creeper sprites remain preserved in the supplied folder.

## Supplied assets verified and used

- `assets/bg/download.png` — 2048×1152 Minecraft landscape, used behind all five pages on a separate 2.5px blurred layer.
- `assets/sprites/new assets/heart.png` — transparent red pixel heart used as the clickable Home logo on every page.
- `assets/sprites/new assets/diamond_sword.png` and `diamond.png` — transparent item icons for project entries and the Home scene. The supplied heart also decorates Home and appears in all eight Skills cards.
- `assets/sprites/audio/C418 - Minecraft - Minecraft Volume Alpha - SMORT.mp3` — supplied audio file used by the shared music player on all five pages.
- `assets/sprites/wooden sign/wooden_sign.png` — preserved as the visual reference for the custom CSS plank signs used on About and Contact.
- `assets/sprites/Fontforname/Minecraft.ttf` — valid TrueType font named Minecraft, applied only to the Home page name.

The checked supplied PNGs contain alpha channels with transparent pixels. All supplied files were left unchanged, including sprites that are not part of the final Home composition.

## Edit the portfolio

- Update the `ASSETS`, `SKILLS`, `MILESTONES`, `JAVA_PROGRAMS`, `PROJECTS`, and `CONTACTS` data near the top of `script.js`. Node.js and GitHub skill status labels can be edited in `SKILLS` without inventing a proficiency claim.
- Change the Home item composition and independent Web Animations API timing values in `renderHomeItems()` in `script.js`. Floating starts automatically, including when this browser reports reduced motion, as requested for this portfolio.
- Change the music filename in the `MUSIC_SOURCE` constant near the top of `script.js` if you replace the supplied MP3. The player starts only after a visitor clicks **Play Music**; it loops and keeps the same audio element alive during internal navigation.
- Adjust page styling and breakpoints in `style.css`.
- Each HTML page contains the shared HOME, ABOUT, SKILLS, WORK, CONTACT navigation with a correct active link. The heart logo and Home links point to `index.html`.
- Bhujal's repository URL is intentionally blank; its repository button is hidden. Add a visitor-accessible link to that project's `repository` field only if one becomes available.
- No Bhujal README screenshot or repository source was present in the workspace. The popup lists the requested focus areas from the supplied brief and does not claim a public deployment or specific technology stack.
- Java program names come from the supplied brief. The source repository was not present in the workspace, so individual program summaries stay general rather than claiming unverified implementation details.
- Preserved third-party sprite source pages, direct image URLs, and attribution guidance are recorded in [`assets/sprites/external/SOURCES.md`](assets/sprites/external/SOURCES.md). Those renders are currently unused.

## Run locally

From the project root, start Python's built-in static server:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). The five pages are available at `/`, `/about.html`, `/skills.html`, `/work.html`, and `/contact.html`. Stop the server with `Ctrl+C` in the terminal. VS Code Live Server can also serve `index.html` and its relative links.

## Deploy

### GitHub Pages

1. Push this folder to a GitHub repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)`, and save.

### Vercel

Import the repository and deploy it as a static site from the repository root. No framework preset, build command, or output directory is needed.

## Accessibility and behavior

- The header has five normal links: HOME, ABOUT, SKILLS, WORK, and CONTACT. All pages link the heart logo to Home.
- Explore My Work opens `work.html`.
- Project details use a native dialog with keyboard focus, Escape, a close control, backdrop closing, and internal scrolling. Browser modal behavior prevents background interaction/scroll while it is open.
- External GitHub and LinkedIn links use `target="_blank"` with `rel="noopener noreferrer"`; Email uses `mailto:`.
- Decorative item sprites do not intercept pointer input, use independent Web Animations API floating motion, and are reduced on small screens. Their gentle floating continues when `prefers-reduced-motion` is set, per the owner's preference; other CSS entrance and interface transitions remain reduced.
- The background image alone is blurred. A separate dark overlay improves contrast; foreground text, sign art, and items remain sharp.
- Music state and position are written to `sessionStorage`. Internal navigation preserves the actual audio element, so the track does not restart. A hard reload or direct page load attempts to resume the saved position and playback, but browser autoplay rules may require another click; the control then correctly shows **Play Music**. Seeking after a hard reload also depends on the local server's support for byte-range requests.
