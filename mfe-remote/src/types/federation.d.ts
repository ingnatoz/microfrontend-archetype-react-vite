// Contracts of the federated modules that the remote consumes.
// TypeScript cannot see code from other builds, so each module is declared here.
// Must match `mfe-appshell/src/context/GlobalContext.ts`.

declare module 'host/GlobalContext' {
  import type { Context } from 'react';

  export interface GlobalContextValue {
    clicks: number;
    registerClick: () => void;
    resetClicks: () => void;
  }

  export const GlobalContext: Context<GlobalContextValue | null>;
}
