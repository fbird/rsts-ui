## ADDED Requirements

### Requirement: Company-level first-view positioning
The homepage SHALL identify RSTS as an oil and gas competence and operational assurance partner in
the first viewport, and SHALL name accredited well control, technical and HSE training, and rig
assurance in the supporting message.

#### Scenario: Corporate positioning is visible on desktop
- **WHEN** a visitor opens the homepage at a desktop viewport
- **THEN** the RSTS brand, company-level value proposition, primary training action, and supporting company or enquiry action are visible without scrolling

#### Scenario: Corporate positioning remains clear on mobile
- **WHEN** a visitor opens the homepage at a mobile viewport
- **THEN** the brand and full business scope remain readable without text overlap or horizontal scrolling

### Requirement: Verified recognition network
The homepage SHALL present current, stakeholder-approved accreditation, licensing, quality-system,
and supplier-registration evidence separately from marketing claims.

#### Scenario: Approved recognition is presented
- **WHEN** recognition content is rendered
- **THEN** each displayed logo or identifier corresponds to a currently verified and publication-approved RSTS credential

#### Scenario: Unverified recognition is excluded
- **WHEN** a credential or identifier cannot be confirmed before release
- **THEN** the homepage omits that credential rather than presenting an outdated or inferred claim

### Requirement: Evidence-led homepage narrative
The homepage SHALL progress from corporate positioning and recognition through capabilities,
accredited pathways, operational evidence, rig assurance, flexible delivery, and conversion without
duplicating the purpose of a section.

#### Scenario: Visitor follows the homepage sequence
- **WHEN** a visitor scrolls through the homepage from top to bottom
- **THEN** each major section introduces a distinct stage of the claim-to-proof-to-conversion narrative

#### Scenario: Detailed content is routed away from the homepage
- **WHEN** a visitor needs complete course, company-profile, or certification details
- **THEN** the homepage provides a route to the relevant detailed destination instead of reproducing exhaustive content

### Requirement: Four integrated capability pillars
The homepage SHALL present Accredited Well Control, Technical Training, HSE and Safety, and Rig
Assurance as the four primary RSTS capability pillars.

#### Scenario: Capability scope is scanned
- **WHEN** a visitor reaches the integrated capabilities section
- **THEN** all four pillars have distinct names, outcome-oriented summaries, and relevant supporting imagery or details

#### Scenario: Visitor explores training detail
- **WHEN** a visitor activates the capability section's training catalogue action
- **THEN** the application navigates to the existing course catalogue destination

### Requirement: Role-based accredited pathways
The homepage SHALL explain IWCF and IADC pathways through operational responsibility, including
foundation personnel, drillers, and supervisors, rather than only displaying a flat list of course
levels.

#### Scenario: Candidate identifies a relevant pathway
- **WHEN** a visitor reviews accredited pathway content
- **THEN** the visitor can distinguish foundation, driller, and supervisor responsibility contexts and access programme-level detail

#### Scenario: Pathway language remains accurate
- **WHEN** pathway copy is published
- **THEN** role descriptions and accreditation references match current approved programme information

### Requirement: Dedicated rig assurance presentation
The homepage SHALL give DROPS surveys, rig inspection, technical audit, and commissioning a
dedicated service presentation that is visually and semantically distinct from course cards.

#### Scenario: Operations buyer reviews rig assurance
- **WHEN** a visitor reaches the rig assurance presentation
- **THEN** the visitor can identify the service scope, applicable asset or operating context, and an enquiry path

#### Scenario: Rig assurance is not misclassified
- **WHEN** the integrated capability content is rendered
- **THEN** rig assurance is described as an operational service and not as a training course category

### Requirement: Approved operational evidence
The homepage SHALL use real, approved programme or field evidence to demonstrate practical delivery
and operating context.

#### Scenario: Approved project evidence is displayed
- **WHEN** a programme image, client name, logo, or project record appears on the homepage
- **THEN** the asset is publication-approved and its caption accurately identifies the activity and context

#### Scenario: Client approval is unavailable
- **WHEN** permission to publish a client identity is unavailable
- **THEN** the homepage uses an accurate generic description or omits the client identity while preserving the evidence context

### Requirement: Consolidated flexible delivery model
The homepage SHALL present centre-based schedules, portable simulation, tailored corporate
programmes, client-site delivery, and candidate support in one flexible-delivery section.

#### Scenario: Delivery options are compared
- **WHEN** a visitor reaches the flexible-delivery section
- **THEN** the visitor can scan each available delivery mode and understand how it supports a workforce or candidate need

#### Scenario: Duplicate delivery messaging is avoided
- **WHEN** the complete homepage is reviewed
- **THEN** no second major section repeats the same centre, simulator, tailoring, and site-delivery claims

### Requirement: Certificate and enquiry conversion paths
The homepage SHALL retain certificate verification and SHALL provide clear actions for training
selection, corporate programme planning, and rig assurance enquiries.

#### Scenario: Certificate verification is selected
- **WHEN** a visitor activates the certificate verification action
- **THEN** the application navigates to the existing certificate verification destination

#### Scenario: Training exploration is selected
- **WHEN** a visitor activates the primary training action
- **THEN** the application navigates to the existing course catalogue destination

#### Scenario: Corporate or rig assurance enquiry is selected
- **WHEN** a visitor activates a corporate programme or rig assurance enquiry action
- **THEN** the application navigates to the approved contact destination with clear service context

### Requirement: Governed public claims
The homepage MUST publish only confirmed facts for accreditation identifiers, ISO certifications,
centre locations, instructor counts, scheduling frequency, mobilisation lead times, client
relationships, and operational reach.

#### Scenario: Content is prepared for release
- **WHEN** homepage copy contains a quantitative, accreditation, location, timing, or client claim
- **THEN** the claim is traceable to a current stakeholder-approved source before release

#### Scenario: A claim expires or changes
- **WHEN** a previously published claim is no longer current
- **THEN** the claim can be removed or updated in the centralized homepage content without changing unrelated page behavior

### Requirement: Responsive and accessible presentation
The homepage SHALL preserve content hierarchy, legibility, keyboard access, and meaningful media
alternatives across desktop, tablet, and mobile viewports.

#### Scenario: Responsive layouts are reviewed
- **WHEN** the homepage is rendered at representative desktop, tablet, and mobile widths
- **THEN** text, actions, logos, media, and fixed-format elements do not overlap, clip, or create horizontal page scrolling

#### Scenario: Keyboard visitor uses homepage actions
- **WHEN** a visitor navigates the homepage using a keyboard
- **THEN** every interactive control can receive visible focus and be activated in a logical order

#### Scenario: Reduced motion is requested
- **WHEN** the visitor has enabled reduced motion
- **THEN** non-essential animations and image movement are disabled without hiding content

### Requirement: Media performance and stability
The homepage SHALL load the first-view media with stable dimensions and SHALL defer non-critical
below-fold media where doing so does not affect comprehension.

#### Scenario: First viewport loads
- **WHEN** the homepage begins rendering
- **THEN** the hero media reserves stable layout space and does not depend on autoplay video for the company message

#### Scenario: Visitor scrolls below the fold
- **WHEN** below-fold visual sections approach the viewport
- **THEN** responsive optimized images load without causing incoherent layout shifts
