## Context

The site currently has a two-column layout with profile info on the left and content on the right. The content area uses react-router for tab navigation between "About me" and "Work History" sections. This change adds a horizontal tab menu and introduces a "Work Experience" tab with streamlined work history.

## Goals / Non-Goals

**Goals:**
- Add horizontal tab menu above content area
- Keep existing profile links visible in sidebar
- Add "Work Experience" tab with streamlined work history
- Maintain URL-based routing with react-router

**Non-Goals:**
- Changing the overall two-column layout
- Adding more than two tabs
- Modifying the profile sidebar content

## Decisions

### Tab menu placement

**Decision:** Place horizontal tab menu at the top of the content area (right column).

**Rationale:**
- Follows standard UI patterns for tab navigation
- Keeps profile sidebar unobstructed
- Natural reading flow from tabs to content

**Alternatives considered:**
- Tabs in sidebar — would clutter the profile area
- Tabs above both columns — would break the two-column layout

### Work history content source

**Decision:** Extract work history from CV PDF (`/home/ruben/Downloads/cv_Ruben_Barreiro.pdf`) and hardcode as data array in component.

**Rationale:**
- Static content doesn't need dynamic loading
- PDF extraction done once during implementation
- Keeps dependencies minimal

**Alternatives considered:**
- Runtime PDF parsing — overkill for static content
- External API call — unnecessary complexity

### Tab styling approach

**Decision:** Reuse existing tab styles from `tab-colors-and-routing` change with minor adjustments.

**Rationale:**
- Consistent visual language
- Already tested and working
- Minimal new CSS needed

## Risks / Trade-offs

**Risk:** Hardcoded work history may become outdated
→ Mitigation: Manual update required when CV changes; acceptable for personal site

**Risk:** Tab menu may not be visible on mobile
→ Mitigation: Ensure responsive design with horizontal scroll or stacking on small screens
