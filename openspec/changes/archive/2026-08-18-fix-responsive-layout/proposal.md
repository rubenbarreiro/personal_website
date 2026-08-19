## Why

The current layout uses a fixed two-column flexbox (20%/80%) with only a single breakpoints at 1850px for image sizing. On mobile and tablet devices, the side-by-side layout becomes unusable — text is too small, columns are too narrow, and the profile section is cramped. A proper responsive design is needed so the site works well on all screen sizes.

## What Changes

- Replace the fixed two-column flex layout with a responsive layout that stacks vertically on smaller screens
- On mobile/tablet: profile section (sidebar) moves to the top as a full-width header, content section flows below
- Add appropriate breakpoints for mobile, tablet, and desktop transitions
- Ensure profile image, text, and links remain readable and well-sized at all viewport widths

## Capabilities

### New Capabilities

- `responsive-layout`: Responsive behavior that adapts the two-column desktop layout to a single-column stacked layout on smaller viewports

### Modified Capabilities

<!-- No existing specs to modify -->

## Impact

- `src/components/Main/styles.tsx`: Primary file — all layout and responsive styles need updating
- `src/components/Main/index.tsx`: May need minor structural adjustments for semantic HTML or wrapper elements
- `src/index.css`: Global body/root styles may need adjustments for full-width stacking
