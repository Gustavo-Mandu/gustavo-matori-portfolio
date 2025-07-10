import styles from './Footer.module.css';


export const Footer = () => (
  <footer className={styles.footer}>
    <p>© {new Date().getFullYear()} Gustavo Mandu Ferreira Matori. Construído com Next.js e muito café.</p>
  </footer>
);