import { use } from 'react';
import { HostContextHolder, LocalContext } from '../context/contexts';
import type { SharedState } from '../types/sharedState';

/** App Shell state when the remote is mounted inside it; otherwise, the local state. */
export function useSharedState(): SharedState {
  // `use` allows conditional calls: the host context may not have arrived yet.
  const hostContext = use(HostContextHolder);
  const host = hostContext ? use(hostContext) : null;
  if (host) return { ...host, source: 'host' };

  const local = use(LocalContext);
  if (!local) throw new Error('useSharedState must be used within <ContextBridge>.');

  return { ...local, source: 'local' };
}
