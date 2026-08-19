## Context

The current landing page uses react-jss for styling with custom CSS-in-JS classes. The application is a single-page React app with a two-column layout: a sidebar (20%) with profile info and a content area (80%) with tabbed navigation. The dark theme is implemented via hardcoded color values in the jss styles.

## Goals / Non-Goals

**Goals:**
- Replace react-jss with Material UI for all visual components
- Preserve the existing dark color scheme and layout proportions
- Maintain responsive behavior (desktop sidebar + mobile stack)
- Keep the codebase clean with no leftover jss artifacts

**Non-Goals:**
- Adding a light/dark mode toggle (preserve current dark mode only)
- Adding new features or changing the content/structure
- Changing the routing setup or data model

## Decisions

### MUI Version Selection
**Decision**: Install `@mui/material@latest` compatible with React 18.2.0.
**Rationale**: MUI v5.x supports React 18 and is the current stable release. MUI v6 may have breaking changes or different peer dependency requirements.
**Alternatives**: 
- MUI v4: outdated, no React 18 support
- MUI v6: potentially unstable, may require React 19

### Theme Structure
**Decision**: Create a dedicated theme file at `src/theme.ts` with createTheme.
**Rationale**: Centralizes theme configuration, makes it easy to adjust colors and typography later.
**Alternatives**:
- Inline theme in App.tsx: harder to maintain
- ThemeProvider with inline palette: scattered configuration

### Component Migration Strategy
**Decision**: Migrate component by component, starting with App.tsx (ThemeProvider), then Main/index.tsx (layout + components), then delete styles.tsx.
**Rationale**: Incremental approach allows testing each change. ThemeProvider must be in place before using MUI components.
**Alternatives**:
- Big bang rewrite: higher risk of breaking everything at once
- Parallel jss/mui: adds complexity, harder to remove jss later

### Layout Implementation
**Decision**: Use MUI's Grid2 (or Box with flex) for the two-column layout.
**Rationale**: Grid2 is the modern MUI grid with simpler API. Box with flex is also viable for this simple layout.
**Alternatives**:
- CSS Grid: works but doesn't leverage MUI's responsive props
- MUI Grid v1: deprecated in favor of Grid2

### Tab Implementation
**Decision**: Replace NavLink-based tabs with MUI Tabs component, using state to manage active tab instead of React Router.
**Rationale**: The current tabs use NavLink for routing, but this is a single-page app with no real routing needs. MUI Tabs with state is simpler and more appropriate.
**Alternatives**:
- Keep NavLink with MUI styling: adds unnecessary routing complexity
- Use MUI Tab with Router integration: over-engineered for this use case

## Risks / Trade-offs

[Bundle size increase] → MUI adds ~50-80KB gzipped. Acceptable for a portfolio site; no performance-critical interactions.

[Theme customization] → Current hardcoded colors (#16213e, #0f3460) will be moved to theme palette. Future color changes require editing theme.ts only.

[Tab routing removal] → Removing NavLink tabs means direct URL navigation to /about or /work will no longer work. This is acceptable as the site is a single-page portfolio.

## Migration Plan

1. Install MUI dependencies
2. Create theme.ts with dark palette
3. Wrap App.tsx with ThemeProvider
4. Migrate Main/index.tsx to use MUI components
5. Delete Main/styles.tsx
6. Remove react-jss from package.json
7. Run build and lint to verify

## Open Questions

None. All decisions can be resolved during implementation.
