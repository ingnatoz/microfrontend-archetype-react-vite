import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
}

/** Short text that goes with a heading. */
export function Eyebrow({ children }: EyebrowProps) {
  return <p className={styles.eyebrow}>{children}</p>;
}
