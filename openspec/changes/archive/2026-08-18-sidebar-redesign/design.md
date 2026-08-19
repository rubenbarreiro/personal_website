## Context

The current layout uses a simple flex container with two children: `summary` (20% width) and `content` (80% width). There are no visual containers — both sections sit directly on the dark page background with no background colors, borders, or rounded corners. The sidebar has a mobile breakpoint at 768px that stacks vertically. The page background is `#242424` with white text.

## Goals / Non-Goals

**Goals:**
- Wrap sidebar and content in card-like containers with distinct background colors
- Add rounded corners (border-radius) to both cards
- Add spacing between the two cards
- Keep sidebar fixed/sticky on desktop while content scrolls
- Maintain dark mode color scheme
- Keep existing responsive behavior (stacking on mobile)

**Non-Goals:**
- Light/dark mode switching (future change)
- Changing the overall layout proportions (20%/80%)
- Adding animations or transitions
- Changing content or structure of sidebar/content text

## Decisions

### Color palette

**Chosen**: Dark page background (`#1a1a2e` or similar deep dark), sidebar card (`#16213e` — slightly lighter dark blue), content card (`#0f3460` — lighter but distinct from sidebar).

**Alternatives considered:**
- Same color for both cards: Rejected — user specified different colors for visual distinction
- Gray tones: Could work but blue-tinted dark theme is more modern and professional

**Rationale**: Distinct but harmonious dark shades create hierarchy without being jarring.

### Border-radius

**Chosen**: 12px border-radius on both cards.

**Rationale**: Standard for modern card UIs — visible rounded corners without being too soft.

### Sidebar sticky behavior

**Chosen**: Use `position: sticky; top: 20px` on the sidebar card so it stays visible while content scrolls, with `align-self: flex-start` on the flex container.

**Alternatives considered:**
- `position: fixed`: Would remove sidebar from document flow, requiring manual offset for content width. More complex.
- Non-sticky: Sidebar scrolls away, less useful for a profile section.

**Rationale**: Sticky is the simplest approach that keeps the sidebar visible during scrolling.

### Gap between cards

**Chosen**: Use CSS `gap` property on the flex container (20-24px).

**Rationale**: Clean, modern approach to spacing between flex children. No margin hacks needed.

## Risks / Trade-offs

- [Risk] Sticky sidebar may overlap with content on very tall sidebar content → Mitigation: Sidebar content is short (profile image + links), unlikely to exceed viewport height.
- [Risk] Card backgrounds may not contrast enough on some monitors → Mitigation: Use sufficiently distinct shades and test at different brightness levels.
