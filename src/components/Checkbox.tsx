import { CheckCircle, Circle } from 'phosphor-react';
import styles from './Checkbox.module.css'

/*
  DEFAULT: styles.circle
  DONE: styles.checkCircle
*/

export function Checkbox() {
  return (
    <div className={styles.checkCircle}>
        {/* <Circle size={24} /> */}
        <CheckCircle size={24} weight="fill" />
      </div>
  );
}