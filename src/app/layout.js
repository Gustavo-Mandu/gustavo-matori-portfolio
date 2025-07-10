import "./globals.css";

export const metadata = {
  title: "Gustavo Mandu Ferreira Matori | Desenvolvedor Full Stack",
  description: 'Portfólio de Gustavo Mandu Ferreira Matori, desenvolvedor de software especializado em React, Next.js e Java/Spring. Veja meus projetos e entre em contato.',
  keywords: ['Desenvolvedor', 'Full Stack', 'Frontend', 'Backend', 'React', 'Next.js', 'Java', 'Spring Boot', 'Portfólio', 'Gustavo Mandu'],
  authors: [{ name: 'Gustavo Mandu Ferreira Matori', url: 'http://gustavo-matori-portfolio.vercel.app' }],
  creator: 'Gustavo Mandu Ferreira Matori',
  publisher: 'Gustavo Mandu Ferreira Matori',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Gustavo Mandu | Desenvolvedor Full Stack',
    description: 'Portfólio profissional para demonstrar projetos e habilidades em desenvolvimento web.',
    url: 'http://gustavo-matori-portfolio.vercel.app',
    siteName: 'Portfólio Gustavo Mandu',
    images: [
      {
        url: 'http://gustavo-matori-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Imagem de apresentação do portfólio do Gustavo Mandu Ferreira Matori',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Mandu Ferreira Matori | Desenvolvedor Full Stack',
    description: 'Portfólio profissional para demonstrar projetos e habilidades em desenvolvimento web.',
    images: ['http://gustavo-matori-portfolio.vercel.app/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#111111',
  manifest: '/site.webmanifest',
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body>{children}</body>
    </html>
  );
}