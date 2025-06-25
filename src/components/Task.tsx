import { Trash } from 'phosphor-react';
import { Checkbox } from '../components/Checkbox';
import styles from './Task.module.css'

/*
  DEFAULT: styles.task, styles.trash
  DONE: styles.taskDone
*/

export function Task() {
  return (
    <div className={styles.taskDone}>
      <Checkbox />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={styles.trash}>
        <Trash size={24} />
      </div>
    </div>
  );
}