import type { GlobalContextValue } from 'host/GlobalContext';

/** State source: the App Shell or the local context (standalone mode). */
export type SharedStateSource = 'host' | 'local';

export type SharedState = GlobalContextValue & { source: SharedStateSource };
