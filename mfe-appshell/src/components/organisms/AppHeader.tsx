import { Eyebrow } from '../atoms/Eyebrow';
import { ClickCounter } from '../molecules/ClickCounter';
import styles from './AppHeader.module.css';

interface AppHeaderProps {
  eyebrow: string;
  title: string;
  clicks: number;
  onResetClicks: () => void;
}

export function AppHeader({ eyebrow, title, clicks, onResetClicks }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <ClickCounter label="Shared clicks" value={clicks} onReset={onResetClicks} />
    </header>
  );
}
