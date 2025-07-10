import { HeroSection } from './_components/HeroSection/HeroSection';
import { AboutSection } from './_components/AboutSection/AboutSection';
import { ProjectsSection } from './_components/ProjectSection/ProjectsSection';
import { ContactSection } from './_components/ContactSection/ContactSection';
import styles from './page.module.css';
import { EducationSection } from './_components/EducationSection/EducationSection';
import { AcademicJourneySection } from './_components/AcademicJourneySection/AcademicJourneySection';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <div className={styles.journey}>
          <AcademicJourneySection />
          <EducationSection />
        </div>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}