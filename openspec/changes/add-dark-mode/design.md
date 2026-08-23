## Context

The application currently uses a single hardcoded light theme. All styles are defined using `react-jss` within component-local `styles.tsx` files.

## Goals / Non-Goals

**Goals:**
- Implement a theme provider or mechanism to switch between light and dark modes.
- Add a theme toggle button in the left sidebar.
- Ensure all existing components adapt to the selected theme.

**Non-Goals:**
- Implementing a full-blown theme engine with complex customization.
- Adding support for multiple custom themes (e.g., "solarized", "ocean").

## Decisions

- **State Management**: Use React `useState` at the `App.tsx` level to manage the current mode (`'light' | 'dark'`). This is sufficient for a single-page application with no routing.
- **Styling Approach**: Use MUI's `ThemeProvider` (already in use in `App.tsx`). The project styles via MUI `sx` props and emotion — not react-jss as originally assumed; react-jss is not even a dependency. Implementation follows the existing MUI architecture.
- **Theme Definition**: Two `createTheme` objects (light/dark) exported from `src/theme.ts` sharing typography and component overrides. Cards keep their per-mode surface colors via `primary.main`/`secondary.main`; links and the selected-tab indicator use `palette.info` so accents stay readable in both modes. Light mode uses a three-step surface hierarchy for separation: page background (`#dbe1e9`) < sidebar card (`#eef1f6`) < main card (`#ffffff`).
- **Toggle Component**: `src/components/Main/ThemeToggle.tsx` — an MUI `Switch` in a `FormControlLabel` ("Dark mode"), rendered at the bottom of the left sidebar card, below all other content.

## Risks / Trade-offs

- [Risk] Increased complexity in `styles.tsx` files → [Mitigation] Use a centralized theme object with consistent variable names to make updates predictable.
- [Risk] Potential for "flash of unstyled content" (FOUC) if theme is loaded from localStorage → [Mitigation] Initialize theme state from `localStorage` synchronously during the initial render.
