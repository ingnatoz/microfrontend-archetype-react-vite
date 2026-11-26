import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { HostContextHolder, LocalContext, type HostContext } from './contexts';

type HostModule = typeof import('host/GlobalContext');

// With a dynamic import(), the federation plugin delivers modules without `export default`
// wrapped in `{ default: module }`. Both shapes are accepted.
function pickGlobalContext(mod: HostModule | { default?: HostModule }): HostContext | undefined {
  return 'GlobalContext' in mod ? mod.GlobalContext : mod.default?.GlobalContext;
}

/**
 * Connects the remote to the App Shell state: downloads `host/GlobalContext` at
 * runtime. If the host does not respond (standalone mode), components use the local state.
 */
export function ContextBridge({ children }: { children: ReactNode }) {
  const [hostContext, setHostContext] = useState<HostContext | null>(null);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    let active = true;

    import('host/GlobalContext')
      .then((mod) => {
        const globalContext = pickGlobalContext(mod);
        if (!globalContext) {
          console.warn('[mfe-remote] host/GlobalContext does not export GlobalContext; using the local context.');
          return;
        }
        if (active) setHostContext(globalContext);
      })
      .catch((error: unknown) => {
        console.warn('[mfe-remote] host/GlobalContext is unavailable; using the local context.', error);
      });

    return () => {
      active = false;
    };
  }, []);

  const local = useMemo(
    () => ({
      clicks,
      registerClick: () => setClicks((current) => current + 1),
      resetClicks: () => setClicks(0),
    }),
    [clicks],
  );

  return (
    <HostContextHolder value={hostContext}>
      <LocalContext value={local}>{children}</LocalContext>
    </HostContextHolder>
  );
}
