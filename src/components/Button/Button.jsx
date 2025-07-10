import styles from './Button.module.css';

// variant pode ser 'primary' ou 'outline'
export const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};