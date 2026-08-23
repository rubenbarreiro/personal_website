## Why

The current website only supports a light theme, which can be uncomfortable for users in low-light environments. Adding a dark mode improves accessibility and user experience.

## What Changes

- Implement a dark mode theme.
- Add a theme toggle switch (styled button) in the left sidebar, positioned below all content but within the existing card.
- Update component styles to support both light and dark modes using `react-jss`.

## Capabilities

### New Capabilities
- `theme-toggle`: Introduces the ability to switch between light and dark themes.
- `sidebar-layout`: Sidebar card renders at the same height as the main content card on desktop.

### Modified Capabilities
- None

## Impact

- `src/App.tsx`: Theme mode state, localStorage persistence, `ThemeProvider` wiring.
- `src/theme.ts`: Light and dark theme definitions.
- `src/components/Main/index.tsx`: Hosts the toggle; hardcoded colors become theme-aware.
- `src/components/Main/ThemeToggle.tsx`: New toggle switch component.
