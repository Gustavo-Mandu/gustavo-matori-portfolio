import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';
import { projectsData } from '@/data/projectsData.js';

export const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Meus Projetos</h2>
      <p className={styles.subtitle}>
        Aqui estão alguns dos projetos em que trabalhei.
      </p>
      <div className={styles.carouselContainer}>
        {projectsData.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};