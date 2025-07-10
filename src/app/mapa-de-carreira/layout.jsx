import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function MapaCarreiraLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}