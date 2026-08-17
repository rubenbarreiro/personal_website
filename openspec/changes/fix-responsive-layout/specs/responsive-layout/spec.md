## Purpose

Provides responsive layout behavior that adapts the personal website from a two-column desktop layout to a single-column stacked layout on smaller viewports, ensuring readability and usability across all device sizes.

## ADDED Requirements

### Requirement: Layout stacks vertically on narrow viewports
The system SHALL display the profile section (sidebar) above the content section in a single-column layout when the viewport width is at or below a defined mobile breakpoint.

#### Scenario: Mobile viewport layout
- **WHEN** the viewport width is 768px or less
- **THEN** the profile section SHALL occupy the full width and appear above the content section

#### Scenario: Desktop viewport layout
- **WHEN** the viewport width is greater than 768px
- **THEN** the profile section and content section SHALL appear side by side in a two-column layout

### Requirement: Profile image scales appropriately
The system SHALL ensure the profile image remains visually proportional and centered at all viewport widths without overflow or distortion.

#### Scenario: Profile image on mobile
- **WHEN** the viewport width is at or below the mobile breakpoint
- **THEN** the profile image SHALL be constrained to a reasonable maximum size and remain centered within the profile section

#### Scenario: Profile image on desktop
- **WHEN** the viewport width is greater than the mobile breakpoint
- **THEN** the profile image SHALL display at its natural size or a reasonable constrained size within the 20% sidebar width

### Requirement: Text remains readable at all sizes
The system SHALL ensure all text content remains legible and properly wrapped at any viewport width without horizontal scrolling.

#### Scenario: Content text wrapping
- **WHEN** the viewport is narrow enough that the content section is below the profile section
- **THEN** text SHALL wrap naturally and maintain appropriate font sizing without requiring horizontal scrolling

### Requirement: Links remain accessible and tappable
The system SHALL ensure all links (LinkedIn, GitHub, email) remain individually tappable with adequate touch target size on mobile devices.

#### Scenario: Touch targets on mobile
- **WHEN** the viewport width is at or below the mobile breakpoint
- **THEN** all interactive links SHALL have sufficient spacing and size for comfortable touch interaction
