import { Suspense, type ReactNode } from 'react';
import { RemoteBoundary } from './RemoteBoundary';
import styles from './RemoteSlot.module.css';

interface RemoteSlotProps {
  /** Microfrontend name; shown in the loading and error messages. */
  name: string;
  children: ReactNode;
}

/** Mount point for a microfrontend: loading state and failure isolation. */
export function RemoteSlot({ name, children }: RemoteSlotProps) {
  return (
    <RemoteBoundary name={name}>
      <Suspense fallback={<p className={styles.loading}>Loading {name}…</p>}>{children}</Suspense>
    </RemoteBoundary>
  );
}
