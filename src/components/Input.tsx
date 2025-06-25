import styles from './Input.module.css'

/*
  DEFAULT: styles.input
  FILLED: styles.inputFilled
*/

export function Input() {
  return (
    <input 
      className={styles.input} 
      type='text' 
      defaultValue='Adicione uma nova tarefa'>
    </input>
  );
}