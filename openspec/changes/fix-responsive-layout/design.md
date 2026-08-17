## Context

The Main component (`src/components/Main/`) uses a flex container with two children: `summary` (20% width) and `content` (80% width). The only existing breakpoint is a single `@media (max-width: 1850px)` rule on the profile image. The layout does not adapt for tablets or mobile devices — columns remain side-by-side at all widths, making the site unusable on narrow screens.

## Goals / Non-Goals

**Goals:**
- Make the site usable and visually clean on mobile (≤768px), tablet (769–1024px), and desktop (>1024px)
- Stack profile above content on mobile/tablet, keeping the two-column layout on desktop
- Keep the implementation minimal — CSS-only changes in react-jss, no new dependencies

**Non-Goals:**
- Adding a hamburger menu or navigation (site has no navigation)
- Redesigning the visual appearance or color scheme
- Adding animations or transitions for layout shifts

## Decisions

### Breakpoint strategy: single mobile breakpoint at 768px

**Chosen**: Use one breakpoint at 768px to switch from two-column to single-column.

**Alternatives considered:**
- Multiple breakpoints (mobile/tablet/desktop): Adds complexity with minimal benefit for a single-page landing site. The content is simple enough that a single stacking breakpoint works well.
- Container queries: Not widely supported enough for the target browsers and adds unnecessary complexity.

**Rationale**: The site is a simple landing page with two sections. One breakpoint keeps the CSS minimal and maintainable, consistent with the project's preference for simplicity.

### Flex direction toggle approach

**Chosen**: Use `flex-direction: column` at the mobile breakpoint on the main container, and set children to `width: 100%`.

**Alternatives considered:**
- CSS Grid: Equivalent outcome but adds conceptual overhead for a simple two-child layout.
- Restructuring HTML with separate mobile/desktop layouts: Over-engineered, adds unnecessary DOM complexity.

**Rationale**: The existing flex layout only needs `flex-direction` and `width` changes at the breakpoint. Minimal code change, maximum clarity.

### Profile image sizing on mobile

**Chosen**: Cap the profile image at a max-width (e.g., 200px) on mobile to prevent it from spanning the full viewport width.

**Rationale**: On a full-width mobile profile section, the image would be excessively large without a constraint.

## Risks / Trade-offs

- [Risk] Profile image may look too small on very narrow screens → Mitigation: Use a percentage-based max-width with a pixel floor, or let the existing 80% width rule from the 1850px breakpoint handle it naturally at smaller sizes.
- [Risk] Text wrapping on the content section may create awkward line lengths → Mitigation: The content text already uses `white-space: pre-wrap` and `word-wrap: break-word`; adding a max-width or padding on the content section will keep line lengths comfortable.
