"use client";

import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error("Falha na rede.");

      setStatus('Mensagem enviada com sucesso!');
      e.target.reset();
    } catch (error) {
      setStatus('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div>
        <h2 className={styles.title}>Entre em Contato</h2>
        <p className={styles.subtitle}>
          Tem uma pergunta, proposta ou só quer dizer oi? Manda uma mensagem!
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wrapperForm}>
          <div className={styles.inputNameEmail}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome</label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" name="email" className={styles.input} required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Mensagem</label>
            <textarea id="message" name="message" className={styles.textarea} rows="5" required></textarea>
          </div>
        </div>
        <Button type="submit" variant="primary">
          {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </section>
  );
};