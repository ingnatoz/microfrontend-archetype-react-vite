# mfe-remote

Remote microfrontend of the archetype. It exposes a view that the App Shell (`mfe-appshell`)
loads at runtime. It also works alone, in standalone mode.

- Port: 8081
- Exposes: `remote/RemoteApp` (`src/RemoteApp.tsx`)
- Consumes: `host/GlobalContext` (contract in `src/types/federation.d.ts`)
- App Shell URL: `http://localhost:8080` by default. For another environment, set `HOST_URL` at
  build time.

## Usage

Run `make install` and `make start`. Inside the App Shell, the remote uses its state; alone, it
uses a local context. `make help` lists every command.

The full architecture is in the [main README](../README.md).
