## Purpose

Configures a dark theme for the application using Material UI's theming system, preserving the current dark aesthetic while enabling consistent styling across all MUI components.

## ADDED Requirements

### Requirement: Dark theme palette
The system SHALL provide a dark color palette with primary, secondary, background, and text colors matching the current design (#16213e sidebar, #0f3460 content area).

#### Scenario: Theme applied to application
- **WHEN** the application loads
- **THEN** all MUI components SHALL render with the dark theme palette

### Requirement: Theme provider wrapping
The system SHALL wrap the application with MUI's ThemeProvider to make the theme available to all child components.

#### Scenario: Theme context available
- **WHEN** any component renders inside the app
- **THEN** it SHALL have access to the configured MUI theme

### Requirement: Typography configuration
The system SHALL configure typography defaults that match the current font sizing and weight conventions.

#### Scenario: Text rendering
- **WHEN** Typography components render
- **THEN** they SHALL use the configured font family, sizes, and weights

### Requirement: Link visibility on dark backgrounds
The system SHALL ensure all links on dark card backgrounds (#16213e) have sufficient contrast for readability.

#### Scenario: Sidebar links
- **WHEN** LinkedIn, GitHub, or email links render in the sidebar card
- **THEN** they SHALL use a light color (#90caf9 or similar) with hover state for visibility

### Requirement: Tab visibility
The system SHALL ensure tabs have clear visual distinction between active and inactive states.

#### Scenario: Tab contrast
- **WHEN** tabs render in the content card
- **THEN** active tab SHALL have visible background/underline and text color contrast
