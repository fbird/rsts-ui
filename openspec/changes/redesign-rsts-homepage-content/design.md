## Context

The homepage is implemented as a Vue 3 single-file view in `src/views/home/HomeView.vue`. It already
contains a corporate hero, accreditation logos, capability content, delivery information, recent
programme evidence, and certificate verification, but the narrative currently over-emphasizes the
academy identity and repeats flexible-delivery messaging. The company profile establishes a broader
business spanning accredited well control, technical and HSE training, DROPS surveys, rig inspection,
audit, and commissioning.

The primary audiences are individual candidates selecting accredited training, corporate learning
and competency buyers, and operations teams seeking rig assurance services. The implementation must
remain compatible with the existing Vue Router destinations, local media assets, Element Plus setup,
desktop navigation, and mobile layout. Public claims must be reviewed by RSTS stakeholders because
the supplied company profile is dated 2023 and contains statements that may no longer be current.

## Goals / Non-Goals

**Goals:**

- Establish RSTS as an oil and gas competence and operational assurance partner within the first
  viewport.
- Create a coherent homepage narrative that moves from positioning and trust to capabilities,
  evidence, delivery, and conversion.
- Make accredited well control and rig assurance visibly distinct from the general course catalogue.
- Serve candidate and corporate audiences without duplicating sections or calls to action.
- Use real operational imagery and verifiable evidence while preserving responsive performance,
  accessibility, and the existing application architecture.

**Non-Goals:**

- Redesigning the global header, footer, course catalogue, certificate results pages, or admin area.
- Changing API contracts, adding a CMS, or introducing new runtime dependencies.
- Publishing the full company profile, complete course catalogue, mission statement, or vision
  statement on the homepage.
- Inventing performance statistics, client endorsements, accreditation claims, or delivery promises.
- Refactoring unrelated homepage infrastructure solely to create a new component architecture.

## Decisions

### 1. Use a company-level brand position

The first viewport will lead with the RSTS company brand and a concise competence-and-assurance
promise. Supporting copy will explicitly name accredited well control, technical and HSE training,
and rig assurance across onshore and offshore operations.

This is preferred over retaining an academy-only position because rig assurance is a meaningful
business line and corporate buyers need to understand the full scope immediately. The academy name
may remain as a supporting training identity, but not as the sole definition of the company.

### 2. Organize the homepage as one evidence-led narrative

The page will use the following order:

1. Corporate hero and primary actions.
2. Recognition and qualification network.
3. Four integrated capability pillars.
4. Role-based IWCF and IADC pathways.
5. Operational programme evidence.
6. Dedicated rig assurance presentation.
7. Consolidated flexible-delivery model.
8. Certificate verification and closing enquiry actions.

This order moves from claim to proof to conversion. A catalogue-first layout was rejected because it
makes RSTS resemble a generic course marketplace and forces corporate buyers to infer the company
position from individual offerings.

### 3. Consolidate capability and delivery content

The homepage will expose four stable capability pillars: Accredited Well Control, Technical
Training, HSE and Safety, and Rig Assurance. Detailed course names remain in the catalogue.

Centre delivery, weekly scheduling, portable simulation, corporate tailoring, client-site delivery,
and candidate support will appear in one flexible-delivery section. Repeating these claims in both a
positioning section and a later delivery section is explicitly avoided.

### 4. Present accreditation through role pathways

IWCF and IADC content will be summarized by operational responsibility: foundation personnel,
drillers, and supervisors. Each pathway will explain the role and decision context, then direct users
to the catalogue for programme-level details.

Role pathways are preferred over a flat list of levels because they help candidates and corporate
buyers identify relevance without reproducing technical catalogue content on the homepage.

### 5. Give rig assurance independent visual and semantic weight

DROPS surveys, rig inspection, technical audit, and commissioning will receive a dedicated section
or dominant capability treatment with actual rig imagery and a service enquiry action. It will not be
presented as a fourth training card.

This decision reflects the company profile and creates meaningful differentiation from training-only
competitors.

### 6. Apply a restrained industrial editorial visual system

The homepage will use image-led, full-width compositions with dark petrol/ink surfaces, restrained
copper accents, off-white or cool mineral backgrounds, strong serif display typography, and compact
sans-serif support text. Technical grids and fine rules may support accreditation or data areas, but
decorative effects must not reduce logo or copy legibility.

Repeated floating cards, ornamental gradients, oversized decoration, and dense course tiles are
rejected. Visual scale will come from imagery, typography, spacing, and contrast rather than from
additional containers.

### 7. Keep content local and typed for this change

Homepage content will continue to use typed local data and existing assets within the Vue view or
closely scoped home modules. No CMS or API is required. Sections may be extracted only where doing so
meaningfully reduces view complexity or isolates interactive behavior.

This keeps the change deployable within the current architecture while leaving a future CMS migration
possible.

### 8. Treat facts and client evidence as governed content

Before publication, stakeholders must confirm accreditation status and identifiers, ISO
certifications, centre locations, instructor counts, scheduling frequency, site-delivery lead times,
and any named-client evidence. Unconfirmed claims will be omitted or replaced with accurate generic
language. Client names and logos require explicit permission.

### 9. Preserve existing destinations and progressive enhancement

Primary training actions will route to the course catalogue, certificate actions to the existing
verification route, and company/service enquiries to the existing contact destination. The company
profile and overview video remain optional supporting actions.

Images will use responsive sizing, lazy loading below the first viewport, meaningful alternative text,
and stable dimensions. The page must remain usable with reduced motion and without hover.

## Risks / Trade-offs

- **[Risk] Company profile facts are outdated or internally inconsistent.** -> Require a stakeholder
  fact sheet and remove any claim that cannot be confirmed before release.
- **[Risk] A long homepage may feel repetitive.** -> Enforce one purpose per section, consolidate
  delivery content, and route detail to catalogue and service pages.
- **[Risk] Rig assurance content may compete with the training conversion path.** -> Use distinct
  service copy and enquiry actions while preserving training as the primary catalogue destination.
- **[Risk] Operational imagery may not have publication approval or suitable quality.** -> Audit
  usage rights and provide approved alternatives before implementation completion.
- **[Risk] Large images and video can degrade initial load performance.** -> Preserve responsive
  image formats, explicit dimensions, poster-based video loading, and below-fold lazy loading.
- **[Trade-off] Local content is faster to implement but requires code changes for copy updates.** ->
  Keep content structures typed and centralized so a later CMS migration remains straightforward.
- **[Trade-off] Strong editorial layouts need viewport-specific tuning.** -> Validate desktop,
  tablet, and mobile screenshots and test long-copy wrapping before release.

## Migration Plan

1. Confirm the public fact sheet and approved assets with RSTS stakeholders.
2. Replace homepage content and hierarchy in scoped increments while preserving existing routes.
3. Review the complete page at desktop, tablet, and mobile widths, including reduced-motion behavior.
4. Run type checking, linting, formatting, and production build validation.
5. Release as a frontend-only deployment; rollback by restoring the prior homepage view and assets.

## Open Questions

- Should the first-view brand be displayed as `RSTS`, `Rainbow Star Training Services`, or retain
  `RSTS Academy` as a formal sub-brand?
- Which ISO certifications and accreditation identifiers are currently valid and approved for web
  publication?
- Are the Dubai associate centre, more-than-20-instructors claim, weekly schedules, and one-week
  worldwide mobilisation commitment still current?
- Which client names, logos, project photographs, and delivery records are approved for public use?
- Should rig assurance enquiries use the general contact page or a dedicated service enquiry route?
