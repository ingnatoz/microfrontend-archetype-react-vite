import type { SharedStateSource } from '../../types/sharedState';
import styles from './ConnectionStatus.module.css';

interface ConnectionStatusProps {
  source: SharedStateSource;
  clicks: number;
}

const MESSAGES: Record<SharedStateSource, string> = {
  host: 'Connected to the App Shell context',
  local: 'Standalone mode (local context)',
};

export function ConnectionStatus({ source, clicks }: ConnectionStatusProps) {
  return (
    <output className={styles.status}>
      {MESSAGES[source]} · clicks: {clicks}
    </output>
  );
}
