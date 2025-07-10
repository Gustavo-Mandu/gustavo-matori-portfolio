"use client";

import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import styles from './ProjectCard.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <Dialog.Root>
      <div className={styles.card}>
        <Dialog.Trigger asChild>
          <div className={styles.imageContainer} style={{ cursor: 'pointer' }}>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={280}
              className={`${styles.image} ${styles.staticImage}`}
            />
            {project.hasGif && project.gif && (
              <Image
                src={project.gif}
                alt={`${project.title} GIF`}
                width={500}
                height={280}
                className={`${styles.image} ${styles.gif}`}
                unoptimized={true}
              />
            )}
          </div>
        </Dialog.Trigger>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.footer}>
            {project.hasUrl && project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Ver Ao Vivo</Button>
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">GitHub</Button>
            </a>
          </div>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <VisuallyHidden>
            <Dialog.Title>Visualização do Projeto: {project.title}</Dialog.Title>
            <Dialog.Description>
              Imagem ampliada do projeto {project.title}.
            </Dialog.Description>
          </VisuallyHidden>

          <Image
            src={project.image}
            alt={`Imagem ampliada do projeto ${project.title}`}
            fill
            style={{ objectFit: 'contain' }}
          />

          <Dialog.Close asChild>
            <button className={styles.closeButton} aria-label="Fechar">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};