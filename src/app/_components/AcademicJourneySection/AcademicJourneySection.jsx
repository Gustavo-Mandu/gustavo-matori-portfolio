"use client";

import styles from './AcademicJourneySection.module.css';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { journeyData } from '@/data/journeyData.js';


export const AcademicJourneySection = () => {
  return (
    <motion.section
      id="journey"
      className={styles.journey}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >

      <h2 className={styles.title}>Formação e Jornada Acadêmica</h2>
      <div className={styles.timeline}>
        {journeyData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.iconWrapper}>
              <GraduationCap />
            </div>
            <div className={styles.timelineContent}>
              <h3>{item.title}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.period}>{item.period}</p>
              {item.certificateLink && (
                // href={item.certificateLink} target="_blank" rel="noopener noreferrer" 
                <a onClick={() => alert('Em breve')} className={styles.certificateLink}>
                  Ver Certificado <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};