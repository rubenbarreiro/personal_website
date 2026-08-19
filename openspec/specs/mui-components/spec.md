## Purpose

Migrates all visual elements from custom react-jss components to Material UI primitives, ensuring consistent styling, accessibility, and maintainability.

## Requirements

### Requirement: Profile image as Avatar
The system SHALL display the profile image using MUI's Avatar component with circular shape.

#### Scenario: Profile image display
- **WHEN** the sidebar renders
- **THEN** profile image SHALL be displayed in an Avatar component with 80% width on desktop, max 200px on mobile

### Requirement: Tab navigation with MUI Tabs
The system SHALL use MUI's Tabs component for "About me" and "Work Experience" navigation.

#### Scenario: Tab rendering
- **WHEN** the content area renders
- **THEN** navigation SHALL use MUI Tabs with proper active state styling

#### Scenario: Tab switching
- **WHEN** user clicks a tab
- **THEN** the corresponding content section SHALL display

### Requirement: Typography for text content
The system SHALL use MUI's Typography component for all text elements (name, title, descriptions, headers).

#### Scenario: Text rendering
- **WHEN** text content displays
- **THEN** it SHALL use Typography components with appropriate variants (h6, body1, etc.)

### Requirement: Links with MUI styling
The system SHALL use MUI's Link component for external links (LinkedIn, GitHub, email).

#### Scenario: Link rendering
- **WHEN** external links display
- **THEN** they SHALL use MUI Link with proper href and target attributes

### Requirement: Work history cards
The system SHALL display work entries using MUI Card components with structured content (role, company, period, highlights).

#### Scenario: Work entry display
- **WHEN** work experience tab is active
- **THEN** each work entry SHALL render as a Card with Typography for role, company, period, and a list for highlights

### Requirement: Remove react-jss dependency
The system SHALL remove all react-jss imports and createUseStyles usage from the codebase.

#### Scenario: Clean migration
- **WHEN** migration is complete
- **THEN** no react-jss imports or createUseStyles calls SHALL exist in the source code
