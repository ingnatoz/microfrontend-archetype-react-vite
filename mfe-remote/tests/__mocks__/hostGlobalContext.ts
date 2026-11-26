// `host/GlobalContext` stub for tests.
import { createContext } from 'react';
import type { GlobalContextValue } from 'host/GlobalContext';

export const GlobalContext = createContext<GlobalContextValue | null>(null);
