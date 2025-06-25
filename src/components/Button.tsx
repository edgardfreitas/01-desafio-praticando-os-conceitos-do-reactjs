import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css'

export function Button() {
  return (
    <button className={styles.button}>
      Criar
      <div className='plusCircleIcon'>
        <PlusCircle size={16} />
      </div>
    </button>
  );
}