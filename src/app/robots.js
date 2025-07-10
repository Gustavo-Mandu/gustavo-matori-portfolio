export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'http://gustavo-matori-portfolio.vercel.app/sitemap.xml',
  };
}