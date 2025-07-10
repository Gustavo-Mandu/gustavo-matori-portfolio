"use client";

import styles from './EducationSection.module.css';
import { motion } from 'framer-motion';
import { educationData } from '@/data/educationData.js'

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className={styles.educationSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className={styles.certificates}>
        <h2>Cursos e Certificados</h2>
        <ul>
          {educationData.map((item, index) => (
            <li key={index} className={styles.educationLink}>
              {/* href={item.link} target="_blank" rel="noopener noreferrer" */}
              {item.text} <a onClick={() => alert('Em breve')}>Link (futuramente)</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};