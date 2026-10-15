# Tagged links (`?t=<tag>`)

Purpose: the analytics Worker (`analytics/`) records the value of `?t=` with every page view
and CV download. It is the only reliable way to tell *who* looked: IP-to-company lookups mostly
return ISPs, mobile carriers or Zscaler. Hand each recipient their own tagged link.

## Convention
- Add `?t=<tag>` to any johnrandall.com URL, including the PDFs:
  `https://johnrandall.com/cv/?t=acme-recruiter`, `https://johnrandall.com/cv/john-randall-cv.pdf?t=acme-recruiter`.
- Tags are lowercase `a-z0-9-`, at most 64 characters (longer values are cut). Use
  `<org>-<role or channel>`: `acme-recruiter`, `linkedin-dm-jane`, `email-sig`.
- A tag names a recipient or a channel, never contains personal data beyond that, and goes in
  the table below the day it is first used.
- The page does not carry the tag on to its PDF/JSON buttons; a recipient who opens the page
  and then downloads shows a tagged page view plus an untagged download from the same IP and
  moments later. The digest groups by IP to join them.

## Tags in use
| Tag | Given to | Where | First used |
|---|---|---|---|
| `selftest` | Analytics builder test traffic (2026-10-15) | test route | 2026-10-15 |
| `livecheck` | Analytics builder smoke test (2026-10-15) | live | 2026-10-15 |
| `li` | Anyone who clicks through from John's LinkedIn About (closing line: `johnrandall.com/?t=li`) | live | 2026-10-15 |
