# Homepage Content Evidence Baseline

## Sources

- User-supplied `RSTS - Company Profile v2.pdf` (2023 catalogue; supplied for this redesign).
- Existing public homepage copy, contact details, routes, videos, and media assets in the RSTS UI
  repository.

## Publication-Safe Claims for This Implementation

- Rainbow Star Training Services LLC operates in oil and gas competence development and operational
  assurance.
- RSTS provides accredited well control pathways, technical training, HSE and safety programmes,
  and rig assurance services.
- Rig assurance scope includes DROPS surveys, rig inspection, technical audit, and commissioning
  support.
- RSTS supports centre-based delivery, portable simulation, tailored corporate programmes,
  client-site delivery, and candidate coordination.
- RSTS serves personnel and teams working in onshore and offshore operating contexts.
- RSTS was established in 2019.
- The current application publicly presents IADC, IWCF, Highfield, ACTVET, ISO 9001, and DAC marks;
  this implementation preserves those existing marks without publishing accreditation identifiers.
- The existing application provides course catalogue, certificate verification, company profile,
  overview video, and contact destinations.

## Claims Excluded Until Separately Reconfirmed

- Accreditation registration numbers and expiry dates.
- Specific ISO certification scope or current certificate validity.
- Instructor count.
- Guaranteed weekly schedules.
- One-week worldwide mobilisation commitment.
- Dubai associate-centre status.
- Quantified candidate, client, country, or project totals.
- Named client endorsements, client logos, or claims of client approval.
- Superlatives such as "world-class", "leading", "best", or "number one".

## Asset Audit

- Existing `rsts-*` WebP assets are approved for reuse within this project scope because they are
  already supplied in the public website asset set.
- Existing programme photographs may be used as operational evidence with generic role/activity
  captions; folder names and client identities must not be exposed in visible homepage copy or alt
  text.
- Recognition logos may be presented only as the existing recognition network and must not be used
  to imply unverified programme scope or certificate status.
- The existing company-profile PDF and overview video remain supporting media; the homepage message
  must remain complete without opening or playing them.

## Route Decisions

- Training and pathway exploration: `/course/catalog`.
- Certificate verification: `/certificates/index`.
- Corporate programme and rig assurance enquiries: `/contact`.
- Company profile: existing imported PDF opened in a new browser tab.
- Overview video: existing modal video flow.

This baseline intentionally uses conservative generic language. RSTS stakeholders should revalidate
time-sensitive credentials and service commitments before a production release that adds more
specific claims.
