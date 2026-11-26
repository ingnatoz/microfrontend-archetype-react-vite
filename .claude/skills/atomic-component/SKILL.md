---
name: atomic-component
description: Creates or moves React components with Atomic Design following this repo's conventions. Use it when adding atoms, molecules, organisms, templates or pages in mfe-appshell or mfe-remote.
---

# Atomic Design component

1. Pick the lowest level that works:
   - `atoms`: a single element with no dependencies (`Button`).
   - `molecules`: atoms combined for a single purpose (`ClickCounter`).
   - `organisms`: a complete section of the UI (`AppHeader`).
   - `templates`: the page structure, with slots for the content (`ShellLayout`).
   - `pages`: connect the state (context hooks) to a template.
2. Create `src/components/<level>/<Name>.tsx` and, if it has styles, `<Name>.module.css` next to
   it. Pages go in `src/pages/`.
3. Export a named function. Props go in a local `interface`.
4. Only pages read the context; everything else receives props.
5. Colors and borders use tokens: `var(--accent)`, `var(--surface)`... in `mfe-appshell`, and
   `var(--mfe-accent)`, `var(--mfe-surface)`... in `mfe-remote` (defined by `RemoteLayout`).
6. Accessibility: semantic HTML, `<output>` for changing values and `role="alert"` for errors.
7. If the component has logic (a branch, an effect), add a test in `tests/` with the same path.
   Query elements by role or text, not by class.
8. Finish with `make lint typecheck test` in the project.
