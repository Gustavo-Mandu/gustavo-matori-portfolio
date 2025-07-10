"use client";

import Image from 'next/image';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import { techStack } from '@/data/techStack.js'

export const AboutSection = () => {
  return (
    <motion.section 
      id="about" 
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Sobre Mim</h2>
          <p>
            Olá! Sou Gustavo, um desenvolvedor apaixonado por criar soluções digitais que sejam tanto funcionais quanto visualmente agradáveis. Minha jornada na programação começou com um curso de aplicativos e jogos pelo EducaSP e, desde então, tenho me aprofundado no ecossistema web.
          </p>
          <p>
            Acredito que a melhor interface é aquela que o usuário não precisa pensar para usar. Por isso, foco em escrever código limpo, escalável e centrado na experiência do usuário.
          </p>
          <p>Aqui estão algumas das tecnologias com as quais tenho trabalhado recentemente:</p>
          <ul className={styles.techList}>
            {techStack.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/profile.png"
            alt="Foto de Gustavo Mandu"
            width={250}
            height={250}
            className={styles.profileImage}
          />
        </div>
      </div>
    </motion.section>
  );
};