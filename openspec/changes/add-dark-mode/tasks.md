## 1. Theme Foundation

- [x] 1.1 Define the theme object with light and dark mode color variables and verify the object structure is correct
- [x] 1.2 Implement `ThemeProvider` in `App.tsx` and verify that the theme is accessible via context

## 2. Theme Toggle Implementation

- [x] 2.1 Create the `ThemeToggle` component in `src/components/Main/ThemeToggle.tsx` and verify it renders
- [x] 2.2 Implement the toggle logic in `App.tsx` using `useState` and `localStorage` and verify the theme persists on page reload
- [x] 2.3 Style the `ThemeToggle` button using `react-jss` and verify it matches the design requirements

## 3. Component Adaptation

- [x] 3.1 Update `src/components/Main/styles.tsx` to use theme-aware color variables and verify the visual change when toggling
- [x] 3.2 Audit and update other component styles to ensure full coverage of the new theme and verify no broken styles remain
- [x] 3.3 Make the sidebar card stretch to the same height as the main card on desktop and verify the bottom edges align

## 4. Verification

- [x] 4.1 Perform a manual visual audit of all components in both light and dark modes and verify no accessibility regressions
- [x] 4.2 Run `npm run lint` to ensure no linting errors were introduced and verify the build succeeds
