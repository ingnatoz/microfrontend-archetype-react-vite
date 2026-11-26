import { useMemo, useState, type ReactNode } from 'react';
import { GlobalContext } from './GlobalContext';

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [clicks, setClicks] = useState(0);

  const value = useMemo(
    () => ({
      clicks,
      registerClick: () => setClicks((current) => current + 1),
      resetClicks: () => setClicks(0),
    }),
    [clicks],
  );

  return <GlobalContext value={value}>{children}</GlobalContext>;
}
