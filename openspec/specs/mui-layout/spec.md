## Purpose

Provides a responsive two-column layout using Material UI's Grid and Box components, maintaining the current desktop sidebar + content arrangement and mobile stack behavior.

## Requirements

### Requirement: Two-column desktop layout
The system SHALL render a two-column layout on desktop viewports: left sidebar (20% width) and right content area (80% width).

#### Scenario: Desktop viewport
- **WHEN** viewport width is greater than 768px
- **THEN** sidebar and content area SHALL display side by side with 20/80 split

### Requirement: Mobile responsive stacking
The system SHALL stack sidebar and content vertically on mobile viewports (≤768px).

#### Scenario: Mobile viewport
- **WHEN** viewport width is 768px or less
- **THEN** sidebar and content SHALL stack vertically, each taking full width

### Requirement: Card-based containers
The system SHALL render sidebar and content areas as MUI Card components with rounded corners and appropriate padding.

#### Scenario: Container rendering
- **WHEN** the layout renders
- **THEN** sidebar and content SHALL be wrapped in Card components with border-radius and padding

### Requirement: Sticky sidebar
The system SHALL keep the sidebar fixed at the top of the viewport while scrolling on desktop.

#### Scenario: Scroll behavior
- **WHEN** user scrolls on desktop
- **THEN** sidebar SHALL remain sticky at top: 20px

### Requirement: Content card height constraint
The system SHALL limit the content card height to 80% of the viewport on desktop, preventing it from filling the entire page, with bottom padding to prevent content overlap on scroll.

#### Scenario: Desktop content height
- **WHEN** viewport width is greater than 768px
- **THEN** content card SHALL have maxHeight of 80vh with overflow scroll and bottom padding
