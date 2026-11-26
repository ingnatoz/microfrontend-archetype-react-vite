# CLAUDE.md

Microfrontend archetype with React 19, Vite 7 and Module Federation (`@originjs/vite-plugin-federation`).

## Projects

- `mfe-appshell`: App Shell (host), port 8080. Exposes `host/GlobalContext`.
- `mfe-remote`: remote microfrontend, port 8081. Exposes `remote/RemoteApp`.

They are independent: each one has its own `package.json`, lockfile, tests, Docker setup and
Makefile. There are no workspaces; run commands inside the project folder.

## Commands

`make help` lists everything. The usual ones: `make install`, `make start`,
`make lint typecheck test build` and `make docker-up`.

## Architecture

- Components follow Atomic Design: `src/components/{atoms,molecules,organisms,templates}` and
  `src/pages`. Only pages read the context. Details in the `atomic-component` skill.
- Contract between projects: `GlobalContextValue` in `mfe-appshell/src/context/GlobalContext.ts`
  and its declaration in `mfe-remote/src/types/federation.d.ts`. If one changes, change the other.
- `remoteEntry.js` only exists after `vite build`: test the integration with `make start` or
  Docker, not with `make dev`.
- Styles use CSS Modules with a per-project prefix (`css.modules.generateScopedName`) and
  `cssCodeSplit: true`, so each exposed module injects only its own CSS.

## Language

- Everything is in English (code, comments, UI text, tests, docs and commits) except
  `README.es.md`, the Spanish translation of `README.md`.
- Keep `README.md` and `README.es.md` in sync.

Before marking a change as done, run `/verify`.
