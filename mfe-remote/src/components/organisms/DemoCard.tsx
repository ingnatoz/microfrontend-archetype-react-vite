import { useId } from 'react';
import type { SharedStateSource } from '../../types/sharedState';
import { Button } from '../atoms/Button';
import { Tag } from '../atoms/Tag';
import { ConnectionStatus } from '../molecules/ConnectionStatus';
import styles from './DemoCard.module.css';

interface DemoCardProps {
  clicks: number;
  source: SharedStateSource;
  onRegisterClick: () => void;
}

export function DemoCard({ clicks, source, onRegisterClick }: DemoCardProps) {
  const titleId = useId();

  return (
    <section className={styles.card} aria-labelledby={titleId}>
      <Tag>mfe-remote</Tag>
      <h2 id={titleId} className={styles.title}>
        Hello from the remote microfrontend
      </h2>
      <p className={styles.text}>
        This view lives in another project and is deployed separately. Clicking the button
        updates the App Shell state: watch the counter in the header.
      </p>

      <Button onClick={onRegisterClick}>Register click</Button>
      <ConnectionStatus source={source} clicks={clicks} />
    </section>
  );
}
