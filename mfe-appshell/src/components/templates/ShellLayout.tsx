import type { ReactNode } from 'react';
import styles from './ShellLayout.module.css';

interface ShellLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export function ShellLayout({ header, children }: ShellLayoutProps) {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
