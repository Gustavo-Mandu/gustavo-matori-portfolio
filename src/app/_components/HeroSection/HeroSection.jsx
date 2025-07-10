"use client";

import { Button } from '@/components/Button/Button';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown } from 'lucide-react';
import { ImageCarousel } from '@/components/ImageCarousel/ImageCarousel';
import { eventImages } from '@/data/eventImages.js'

export const HeroSection = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.content}>
        <p className={styles.greeting}>Olá, meu nome é</p>
        <h1 className={styles.name}>Gustavo Mandu Ferreira Matori</h1>
        <h2 className={styles.title}>Desenvolvedor Full-stack</h2>
        <p className={styles.description}>
          Eu construo aplicações web rápidas, responsivas e intuitivas que resolvem problemas reais e proporcionam experiências de usuário memoráveis.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Gustavo-Mandu/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gustavo-mandu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
            LinkedIn
          </a>
        </div>
        <div className={styles.ctaButtons}>
          <a href="https://drive.google.com/file/d/1cXtDw3EU-xz71ibT-h0mfM71XKpl4Hz5/view" target='_blank' rel='noopener noreferrer'>
            <Button variant="primary">
              <FileDown size={18} style={{ marginRight: '8px' }} />
              Baixar CV
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline">Entre em Contato</Button>
          </a>
        </div>
        <div className={styles.carouselWrapper}>
          <ImageCarousel images={eventImages} />
        </div>
      </div>

    </motion.section>
  );
};