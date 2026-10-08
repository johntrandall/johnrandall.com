# johnrandall.com

John Randall's personal site: a landing page and his CV, built with Hugo and
deployed to GitHub Pages on every push to `main`
(`.github/workflows/hugo.yml`). This file says how the site is put together and
records the licence of every font, icon and logo it serves.

## How it is built

- **Landing page:** `layouts/index.html`. Name, tagline, profile links, then one
  row per published document with its three formats: Read (the web page), PDF
  and JSON Resume.
- **Document pages:** `layouts/_default/cv.html`, applied to everything under
  `content/cv*/` and `content/resume*/` by the `[[cascade]]` in `hugo.toml`. A
  letterhead, the format buttons, then the document body typeset like the PDF.
  `layouts/_default/_markup/render-heading.html` turns each entry heading
  (`### Org · Role · Dates`) into a row with the logo, bold organisation, italic
  role and right-aligned dates. `layouts/partials/doc-data.html` reads the PDF
  and JSON links, the page count and the contact lines from the generated page.
- **Which documents exist:** `params.documents` in `hugo.toml` (Résumé `/resume/`,
  CV `/cv/`, Full CV `/cv/full/`, shortest first). A document appears on the
  landing page, and in the switcher at the top of each document page, only once a
  page exists at its URL. The switcher stays hidden while there is only one.
- **"Revised" dates** come from each page's `lastmod` front matter, or else from
  the "Revised YYYY-MM-DD" line the publishing script writes; with neither, no date
  is shown. (Git dates are deliberately not used: the publishing script's safety
  check builds a copy of the site without `.git`.)
- **Generated, not hand-edited:** `content/cv*/index.md` and `static/cv/*` are
  written by the CV publishing script. Change the templates, not those files.
- **Style:** `assets/css/site.css`, a single stylesheet. Light and dark follow
  the reader's system setting. The site loads no scripts and no third-party
  resources.
- **Theme:** PaperMod is still installed (`themes/PaperMod`), but the pages above
  no longer use its templates.

## Licences

### Font

| File | Font | Licence |
|---|---|---|
| `static/fonts/carlito-*.woff2` | Carlito (regular, italic, bold, bold italic), subset to Latin. Metric-compatible with Calibri, the PDF's face | SIL Open Font License 1.1, https://scripts.sil.org/OFL. Copyright 2013 The Carlito Project Authors (https://github.com/googlefonts/carlito). The licence notice is kept in each file's name table |

### Interface icons (inline SVG, `layouts/partials/icons.html`)

| Icon | Source | Licence |
|---|---|---|
| LinkedIn | Simple Icons `linkedin` | CC0 1.0. LinkedIn's brand guidelines govern use of the mark |
| GitHub | Octicons `mark-github` | MIT |
| Mail, Read (book), PDF (file-down), JSON (braces) | Lucide | ISC |

### Logos on the CV (`static/logos/`, mapped in `data/cv_logos.yaml`)

The same marks as the PDF CV. PNGs are downscaled to 96 px.

| File | Source | Licence |
|---|---|---|
| `backerkit.png`, `opslevel.png`, `relpro.png`, `brooklyn-law.png`, `nyu.png`, `general-assembly.png`, `roosevelt.png`, `aclu.png`, `harvard.png`, `brainpop.png`, `grey.png`, `masurlaw.png`, `blip-clinic.png`, `legal-hackers.png`, `montclair-ultimate-frisbee.png`, `montclair-community-prek.png` | The organisations' own logos (Legal Hackers: the "LH" diamond from its logo; Montclair Community Pre-K: its logo without the subtitle line) | Trademarks of their owners, used only to identify John's employers and schools |
| `jkre.png`, `warpwhistle.png`, `freelance.png`, `redrover.svg` | John's own businesses and band | John Randall's own marks |
| `terminal.svg` | Lucide `terminal` | ISC |
| `wayne-boe.svg` | Lucide `school` | ISC |
| `career-break.svg` | Material Symbols `hiking` and `directions-walk` | Apache 2.0 |
| `mad-squirrel.svg` | Squirrel from game-icons.net by Lorc and Delapouite; music note from Material Design Icons | CC BY 3.0 (squirrel: credit to Lorc and Delapouite, game-icons.net); Apache 2.0 (note) |
| `jetsonz.svg` | Material Design Icons `robot-happy`, plus hand-drawn headphones | Apache 2.0 |
