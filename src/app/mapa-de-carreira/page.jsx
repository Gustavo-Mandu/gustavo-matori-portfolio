import styles from './mapa-de-carreira.module.css';

export default function MapaDeCarreiraPage() {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        src="/mapa-carreira.html"
        title="Mapa de Carreira de Gustavo Mandu"
        className={styles.iframe}
      />
    </div>
  );
}