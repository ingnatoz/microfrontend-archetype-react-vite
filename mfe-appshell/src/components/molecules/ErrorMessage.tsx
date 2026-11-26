import type { ReactNode } from 'react';
import { Button } from '../atoms/Button';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  title: string;
  children: ReactNode;
  onRetry: () => void;
}

export function ErrorMessage({ title, children, onRetry }: ErrorMessageProps) {
  return (
    <div role="alert" className={styles.error}>
      <strong>{title}</strong>
      <p className={styles.detail}>{children}</p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  );
}
