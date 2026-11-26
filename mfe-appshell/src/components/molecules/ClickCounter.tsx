import { useId } from 'react';
import { Button } from '../atoms/Button';
import styles from './ClickCounter.module.css';

interface ClickCounterProps {
  label: string;
  value: number;
  onReset: () => void;
}

export function ClickCounter({ label, value, onReset }: ClickCounterProps) {
  const labelId = useId();

  return (
    <div className={styles.counter}>
      <span id={labelId}>{label}</span>
      <output className={styles.value} aria-labelledby={labelId}>
        {value}
      </output>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
}
