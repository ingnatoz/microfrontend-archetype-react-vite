# Code style

- Strict TypeScript, no `any`.
- Components are named functions (`export function Name`). Only the exposed module `RemoteApp`
  uses `export default`.
- Import files directly, no barrels (`index.ts`).
- One CSS Module per component, next to the `.tsx`. Global styles only in `src/styles/`.
- Comments only explain the why. Mark a shortcut with a known limit like this:
  `// shortcut: <limit>, <when to upgrade>`.
- No `.env` files or secrets in the code: URLs for other environments are set at build time.
- Code, comments, UI text and tests in English. The only Spanish file is `README.es.md`.
