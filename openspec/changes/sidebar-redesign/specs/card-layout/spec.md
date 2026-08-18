## Purpose

Provides card-based visual containers for the sidebar and main content area, creating clear visual hierarchy and separation through distinct background colors, rounded corners, and proper spacing.

## ADDED Requirements

### Requirement: Sidebar card container
The sidebar SHALL be displayed as a contained card with a solid background color lighter than the page background, rounded corners, and internal padding.

#### Scenario: Sidebar visual appearance
- **WHEN** the page is rendered at any viewport width
- **THEN** the sidebar SHALL have a distinct background color, border-radius for rounded corners, and padding around its content

#### Scenario: Sidebar positioning
- **WHEN** the viewport width is greater than 768px
- **THEN** the sidebar card SHALL remain fixed/sticky while the content scrolls

### Requirement: Content card container
The main content area SHALL be displayed as a contained card with a solid background color lighter than the page background (different shade than the sidebar), rounded corners, and internal padding.

#### Scenario: Content visual appearance
- **WHEN** the page is rendered at any viewport width
- **THEN** the content area SHALL have a distinct background color (different from sidebar), border-radius for rounded corners, and padding around its content

### Requirement: Visual separation between cards
The sidebar and content cards SHALL have visible spacing between them to create clear visual separation.

#### Scenario: Gap between cards
- **WHEN** the page is rendered in desktop layout (side-by-side)
- **THEN** there SHALL be a visible gap between the sidebar card and content card

### Requirement: Dark mode color scheme
Both cards SHALL use colors appropriate for a dark theme — lighter shades against a dark page background.

#### Scenario: Dark theme colors
- **WHEN** the page is rendered
- **THEN** the page background SHALL be dark, and both cards SHALL use lighter shades that contrast clearly with the background
