## Why

The current site has a two-column layout with profile info on the left and content on the right, but lacks a structured navigation menu. Adding horizontal tabs will provide clear navigation between different sections of the site, making it easier for visitors to find specific information.

## What Changes

- Add a horizontal tab menu above the content area
- First tab: "About me" — existing content (skills, intro, learning)
- Second tab: "Work Experience" — streamlined work history from CV PDF
- Keep existing profile links visible in the sidebar
- Tabs use react-router for URL-based navigation

## Capabilities

### New Capabilities

- `horizontal-tab-menu`: Horizontal tab navigation menu with "About me" and "Work Experience" tabs, using react-router for URL-based routing

### Modified Capabilities

## Impact

- **Code**: `src/components/Main/index.tsx` — refactor to use tab menu with router
- **Code**: `src/components/Main/styles.tsx` — add tab menu styles
- **Code**: `src/App.tsx` — update routes for new tab structure
- **Dependencies**: react-router-dom (already installed)
- **Assets**: Work history content extracted from CV PDF
