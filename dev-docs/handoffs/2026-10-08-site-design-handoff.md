# Handoff: 10 · SITE DESIGN (job-hunt-site-design), 2026-10-08

Purpose: what the site-design session built for johnrandall.com, what it owns, what is
still open, for whoever next changes the site's look or publishes the résumé.

Session: `1f4f3b4d-e447-4c67-9ca1-592e792a5435` (`claude --resume 1f4f3b4d-e447-4c67-9ca1-592e792a5435`).
Transcript: `~/.claude/projects/-Users-johnrandall-job-hunt/1f4f3b4d-e447-4c67-9ca1-592e792a5435.jsonl`.

## ⚠ Waiting on John: two site commits NOT pushed

`~/dev/johnrandall.com` is 2 commits ahead of `origin/main` and `umbridge/main`:

- `3bb3b18` cv logos: BLIP Clinic, Legal Hackers, Montclair Ultimate Frisbee, Montclair
  Community Pre-K; Jettsonz key fixed (mirrors layout's df58765).
- `0797b1f` css: logos on list items (a résumé's Education bullets).

The repo is public and deploys on push, so these need John's go ("push now, or with the
next CV publish?" was asked and not yet answered). The live PDF lacks the four new logos,
so pushing `3bb3b18` alone puts the web page ahead of the PDF until the CV is republished.
`publish-cv --verify` PASSes with both. To ship: `git -C ~/dev/johnrandall.com push origin main && git -C ~/dev/johnrandall.com push umbridge main`.

## What shipped (John: "It's really ugly. Have a designer fix it." → "design looks good. ship it.")

Live since 78a2282 + 14fe1ec. Mockup and screenshots: `dev-docs/site-design/mockup/`.

| File in `~/dev/johnrandall.com` | What it does |
|---|---|
| `layouts/index.html` | Landing: name, tagline, profiles, one row per published document with Read · PDF · JSON |
| `layouts/_default/cv.html` | Document page: top bar (+ Résumé · CV · Full CV switcher when >1 doc), letterhead, format buttons, "revised" line, body |
| `layouts/partials/doc-data.html` | Reads publish-cv's generated page: PDF/JSON hrefs, "N pages", "Revised YYYY-MM-DD" from `<p class="cv-downloads">` (front matter `pdf`, `pdf_pages`, `json`, `lastmod` win if present); first paragraph → letterhead contact; `p.desc` / `p.sub` classes |
| `layouts/_default/_markup/render-heading.html` | `### Org · Role · Dates` → `h3.entry-head` with logo, org, role, dates |
| `layouts/partials/documents.html`, `icons.html`, `site-head.html` | Document list, SVG sprite, head |
| `assets/css/site.css` | The only stylesheet. Carlito, small-caps h2, logos in margin, phone and dark rules |
| `static/fonts/` | Carlito woff2, Latin subset (OFL) |
| `static/logos/`, `data/cv_logos.yaml` | Logos (PNGs at 96 px) and the org-prefix → file map |
| `hugo.toml` | `params.documents` (Résumé `/resume/`, CV `/cv/`, Full CV `/cv/full/`), cascade `layout = "cv"` on `content/cv*`, `content/resume*` |
| `README.md` | How the site is built; every font, icon and logo licence |

## Rules a successor must keep

- **cv_logos.yaml mirrors layout's `logos` table** in `resume/resumes/rendered/pages-style/pages-style.typ`
  (prefix match on the organisation). When layout adds or changes a logo: copy the file to
  `static/logos/` (`sips -Z 96` for PNGs), update the YAML, add its licence row to the
  site README. Never name `~/job-hunt` paths in the public repo.
- **Nothing under `static/cv/`, `content/cv/`, `content/cv-full/`** except publish-cv's
  allowlist: its `check_target_dirs` refuses any other file there (that is why logos live
  in `static/logos/`).
- **Do not enable `enableGitInfo`**: publish-cv's verify builds a copy without `.git`
  and Hugo then fails ("failed to load Git data"). Verified 2026-10-08.
- Public repo, deploys on push: push only on John's go; commit by pathspec with the
  session trailer.

## Contract with 8 · TOOLING's HTML generator (`tools/cv_to_html.py`, 1e3cb44)

Agreed 2026-10-08 and checked against tooling's samples (parity with the site's body):
`h3.entry-head#<goldmark-id> > img.logo` (optional; `alt=""`, 34×34) + `span.entry-name > span.org`
[+ " · " + `span.role`], then `span.dates`; `p.desc` for the italic line after a heading;
`p.sub` for wholly-bold paragraphs; `header.letterhead > h1 + p.contact` (span items,
`span.sep` "·", `br` between lines, `svg.icon > use #i-linkedin|#i-github`); Education
bullets `<li><img class="logo" …>text</li>`. The standalone file embeds site.css (read
from the checkout), the SVG sprite, absolute `https://johnrandall.com` asset URLs,
`div.doc-formats` and `p.updated`. The fragment (`--fragment`) is root-relative, with
no letterhead and no sprite. The site has not switched to consuming the fragment yet;
it still renders publish-cv's Markdown page.

## Open items

1. The push above (John's go).
2. **publish-cv front matter** (requested of the orchestrator, not urgent): `pdf`,
   `pdf_pages`, `json`, `lastmod`. The template already prefers them; the download
   paragraph can then go.
3. **Résumé at `/resume/`**: no site change needed. Once publish-cv stages a page there
   (`content/resume/index.md`, plus PDF and JSON outside `static/cv/` or added to
   publish-cv's allowlist), the landing row and switcher appear on their own. Check its
   Education logos render (CSS `0797b1f`) and the page title name ("Résumé" comes from `params.documents`).
4. **When the site switches to tooling's fragment**: doc-data.html's parsing of
   `cv-downloads` and the contact paragraph becomes unnecessary. The letterhead should
   then come from front matter or a data file.
5. Minor: the 404 page still uses PaperMod's look. On phones there's a small gap between a
   wrapped entry name and its dates line.
