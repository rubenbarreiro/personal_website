## Purpose

Provides horizontal tab navigation menu for the personal website, allowing visitors to switch between "About me" and "Work Experience" sections with URL-based routing.

## ADDED Requirements

### Requirement: Horizontal tab menu SHALL be displayed above content area

A horizontal tab menu SHALL be displayed at the top of the content area, containing tabs for each section of the site.

#### Scenario: Tab menu visibility

- **WHEN** the page loads
- **THEN** a horizontal tab menu SHALL be visible above the content area

### Requirement: Tab menu SHALL contain "About me" and "Work Experience" tabs

The tab menu SHALL contain exactly two tabs: "About me" (first) and "Work Experience" (second).

#### Scenario: Tab labels

- **WHEN** the page loads
- **THEN** the tab menu SHALL display "About me" as the first tab
- **AND** "Work Experience" as the second tab

### Requirement: Clicking a tab SHALL navigate to corresponding route

Clicking a tab SHALL update the browser URL to the corresponding route without a full page reload.

#### Scenario: Tab click updates URL

- **WHEN** user clicks "About me" tab
- **THEN** URL SHALL update to "/" or "/about"
- **AND** about content SHALL be displayed

#### Scenario: Work Experience tab click

- **WHEN** user clicks "Work Experience" tab
- **THEN** URL SHALL update to "/work"
- **AND** work experience content SHALL be displayed

### Requirement: Active tab SHALL have distinct styling

The currently active tab SHALL have visually distinct styling (lighter background, bold text) compared to inactive tabs.

#### Scenario: Active tab styling

- **WHEN** a tab is selected
- **THEN** that tab SHALL have a lighter background color and bold text
- **AND** inactive tabs SHALL have transparent background and normal weight

### Requirement: Browser navigation SHALL work with tabs

Browser back and forward buttons SHALL navigate between previously visited tabs.

#### Scenario: Browser back button

- **WHEN** user navigates from "About me" to "Work Experience"
- **AND** user clicks browser back button
- **THEN** "About me" tab SHALL be displayed
- **AND** URL SHALL update accordingly

### Requirement: Work Experience tab SHALL display streamlined work history

The Work Experience tab SHALL display a streamlined version of work history extracted from the CV PDF, showing role, company, period, and key highlights for each position.

#### Scenario: Work history display

- **WHEN** user clicks "Work Experience" tab
- **THEN** a list of work positions SHALL be displayed
- **AND** each position SHALL show role, company, period, and highlights
