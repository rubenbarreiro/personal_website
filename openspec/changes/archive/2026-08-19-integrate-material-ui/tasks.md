## 1. Setup

- [x] 1.1 Install MUI dependencies (@mui/material, @emotion/react, @emotion/styled, @mui/icons-material)
- [x] 1.2 Create src/theme.ts with dark palette matching current colors (#16213e, #0f3460)
- [x] 1.3 Wrap App.tsx with MUI ThemeProvider

## 2. Layout Migration

- [x] 2.1 Replace Main container with MUI Box/Grid two-column layout
- [x] 2.2 Migrate sidebar to MUI Card with Avatar, Typography, and Link components
- [x] 2.3 Migrate content area to MUI Card container
- [x] 2.4 Implement responsive breakpoints (desktop 20/80 split, mobile stack)

## 3. Component Migration

- [x] 3.1 Replace NavLink tabs with MUI Tabs component (state-based, no router)
- [x] 3.2 Migrate "About me" content to Typography components
- [x] 3.3 Migrate "Work Experience" content to Card-based work entries
- [x] 3.4 Replace all text elements with Typography variants

## 4. Visual Refinements

- [x] 4.1 Limit content card height to 80vh on desktop with overflow scroll and bottom padding
- [x] 4.2 Improve tab visibility with active state contrast (background/underline)
- [x] 4.3 Update sidebar link colors for better readability (#90caf9 or similar)
- [x] 4.4 Update email link color for better readability

## 5. Cleanup

- [x] 5.1 Delete Main/styles.tsx
- [x] 5.2 Remove react-jss from package.json dependencies
- [x] 5.3 Remove any remaining react-jss imports from codebase
- [x] 5.4 Run build (npm run build) and lint (npm run lint) to verify
