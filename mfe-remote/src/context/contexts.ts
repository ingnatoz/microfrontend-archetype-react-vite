import { createContext, type Context } from 'react';
import type { GlobalContextValue } from 'host/GlobalContext';

export type HostContext = Context<GlobalContextValue | null>;

/** App Shell context once downloaded; null until then or if it does not respond. */
export const HostContextHolder = createContext<HostContext | null>(null);

/** Local state with the same shape as the App Shell state, for standalone mode. */
export const LocalContext = createContext<GlobalContextValue | null>(null);
