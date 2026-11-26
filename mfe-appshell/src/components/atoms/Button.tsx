import type { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

export function Button(props: ComponentPropsWithoutRef<'button'>) {
  return <button type="button" className={styles.button} {...props} />;
}
