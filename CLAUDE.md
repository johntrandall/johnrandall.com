# johnrandall.com — notes for agents

- The site is Hugo, deployed to GitHub Pages on push to `main`; see README.md.
- **Visitor and download analytics run on this domain** (Cloudflare Worker `johnrandall-analytics`,
  code in `analytics/`, docs in `dev-docs/analytics/README.md`). Every page view and every
  `/cv/*.pdf|.json` download is logged to D1. Consequences for you: keep those download paths
  stable; give links John sends out a `?t=<tag>` and add the tag to `dev-docs/analytics/tags.md`;
  never commit the digests (`dev-docs/analytics/digests/` is gitignored). Cloudflare deploys use
  the 1Password item "Cloudflare - API Token (infra-agent)"; do not ask John for another token.

- **Blog post URLs** (John, 2026-10-15, via the outreach system): `/posts/<slug>/`, no date in the path. The slug
  is the title in lower-case kebab-case, fixed at first publication and never changed (a rename needs an alias or
  redirect). The date lives in front matter and on the page. `hugo.toml` enforces it with `[permalinks] posts =
  '/posts/:slug/'`. The outreach convention (`~/dev/_areas/conventions/outreach-tracking.md`, "Posts and essays as
  projects") expects exactly that URL on each essay's `Page:` line and fetches it in the sweep.
