## Why

The current landing page uses react-jss for styling, which requires writing custom CSS-in-JS for every component. Material UI provides a comprehensive component library with built-in accessibility, responsive design, and a polished dark theme—eliminating the need to build UI primitives from scratch while maintaining a professional look.

## What Changes

- Install `@mui/material` and its peer dependencies (`@emotion/react`, `@emotion/styled`)
- Install `@mui/icons-material` for icon components
- Replace custom styled elements with Material UI components (Box, Typography, Card, Tabs, Tab, Avatar, Link, IconButton)
- Apply MUI's dark theme via `ThemeProvider` with a custom palette preserving the current dark aesthetic
- Remove `react-jss` dependency and all `createUseStyles` usage
- Update layout to use MUI's Grid/Flex utilities

## Capabilities

### New Capabilities

- `mui-theme`: Dark theme configuration with custom palette, typography, and component overrides
- `mui-layout`: Responsive two-column layout using MUI components (Grid, Box, Card)
- `mui-components`: Migration of sidebar and content area to MUI primitives (Avatar, Tabs, Typography, Links)

### Modified Capabilities

<!-- No existing specs to modify -->

## Impact

- **Dependencies**: Add `@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/icons-material`; remove `react-jss`
- **Components**: `Main/index.tsx`, `Main/styles.tsx` fully rewritten; `App.tsx` wraps with `ThemeProvider`
- **Bundle size**: MUI adds ~50-80KB gzipped; acceptable for a portfolio site
- **Build**: No config changes needed; Vite handles MUI and Emotion out of the box
