import { createContext } from 'react';

/**
 * State that the App Shell shares with the microfrontends.
 * It is the contract between projects: if it changes, update `src/types/federation.d.ts` in every remote.
 */
export interface GlobalContextValue {
  clicks: number;
  registerClick: () => void;
  resetClicks: () => void;
}

// Exposed as `host/GlobalContext`. Remotes receive this same instance.
export const GlobalContext = createContext<GlobalContextValue | null>(null);
