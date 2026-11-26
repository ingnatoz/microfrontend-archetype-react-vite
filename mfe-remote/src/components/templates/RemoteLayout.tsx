import type { ReactNode } from 'react';
import styles from './RemoteLayout.module.css';

interface RemoteLayoutProps {
  children: ReactNode;
}

/** Microfrontend root: defines the design tokens its components use. */
export function RemoteLayout({ children }: RemoteLayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
