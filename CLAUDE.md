# johnrandall.com — notes for agents

- The site is Hugo, deployed to GitHub Pages on push to `main`; see README.md.
- **Visitor and download analytics run on this domain** (Cloudflare Worker `johnrandall-analytics`,
  code in `analytics/`, docs in `dev-docs/analytics/README.md`). Every page view and every
  `/cv/*.pdf|.json` download is logged to D1. Consequences for you: keep those download paths
  stable; give links John sends out a `?t=<tag>` and add the tag to `dev-docs/analytics/tags.md`;
  never commit the digests (`dev-docs/analytics/digests/` is gitignored). Cloudflare deploys use
  the 1Password item "Cloudflare - API Token (infra-agent)"; do not ask John for another token.
