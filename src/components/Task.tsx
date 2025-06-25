import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css'

/*
  DEFAULT: styles.task, styles.circle, styles.trash
  DONE: styles.taskDone, styles.checkCircle
*/

export function Task() {
  return (
    <div className={styles.taskDone}>
      <div className={styles.checkCircle}>
        {/* <Circle size={24} /> */}
        <CheckCircle size={24} weight="fill" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={styles.trash}>
        <Trash size={24} />
      </div>
    </div>
  );
}