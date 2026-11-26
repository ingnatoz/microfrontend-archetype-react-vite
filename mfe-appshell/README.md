# mfe-appshell

App Shell (host) of the archetype. It orchestrates the application, shares the global state and
loads `mfe-remote` at runtime.

- Port: 8080
- Exposes: `host/GlobalContext` (`src/context/GlobalContext.ts`)
- Consumes: `remote/RemoteApp` (contract in `src/types/federation.d.ts`)
- Remote URL: `http://localhost:8081` by default. For another environment, set `MFE_REMOTE_URL`
  at build time.

## Usage

Run `make install` and `make start`. To see the remote inside the App Shell, start `mfe-remote`
too. `make help` lists every command.

The full architecture is in the [main README](../README.md).
