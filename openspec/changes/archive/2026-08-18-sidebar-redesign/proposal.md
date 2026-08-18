## Why

The current layout uses a plain two-column flex design with no visual separation between sidebar and content. The sidebar lacks definition — it blends into the background, making it hard to distinguish its boundaries. The design needs a more polished, card-based approach with clear visual hierarchy.

## What Changes

- Sidebar becomes a fixed, contained card with rounded corners and a lighter background color than the page
- Content area becomes a separate card with rounded corners and a lighter background (different shade than sidebar)
- Sidebar remains fixed/sticky while content scrolls
- Both containers use distinct colors to create visual separation
- Layout maintains the 20%/80% split but with proper spacing and padding between cards

## Capabilities

### New Capabilities

- `card-layout`: Card-based visual containers for sidebar and content with rounded corners, distinct background colors, and proper spacing

### Modified Capabilities

- `responsive-layout`: The existing responsive layout capability needs modification — the card containers must adapt properly on mobile (stacking vertically while maintaining card styling)

## Impact

- `src/components/Main/styles.tsx`: Major restyling — new card styles, background colors, border-radius, padding, fixed sidebar
- `src/components/Main/index.tsx`: Minor HTML structure changes for card wrappers if needed
- `src/index.css`: Page background color may need adjustment to contrast with cards
