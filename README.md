# Phren Thought Studio

The website for Phren Thought Studio, built with [Astro](https://astro.build) from the MIT-licensed [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) template by BracoZS (see `LICENSE`).

Every push to `main` rebuilds the site and publishes it to GitHub Pages automatically.

## Where to edit things

| What | File |
|---|---|
| Studio name, email, tagline, intro, LinkedIn link | `src/site.config.ts` |
| The seven services | `src/data/services.ts` |
| Homepage | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Portfolio pieces (one file each) | `src/content/work/*.md` |
| Colours | top of `src/styles/global.css` |

### Portfolio pieces

Each piece is a Markdown file in `src/content/work/`. At the top:

- `order` sets its position (1 = first)
- `featured: true` shows it on the homepage (up to four)
- `draft: true` hides it from the site without deleting it

## Moving to phrenstudio.com

In `astro.config.mjs`, set `SITE_URL` to `https://www.phrenstudio.com` and `BASE` to `'/'`, add a `public/CNAME` file containing `www.phrenstudio.com`, and update `public/robots.txt`.

## Running locally (optional)

```sh
pnpm install
pnpm dev
```
