import Footer from '@/components/ui/Footer';
import About from '@/components/About';
import Navigation from '@/components/ui/Navigation';
import '../globals.css';
import { Manrope } from 'next/font/google';
import CategoriesMenu from '@/components/CategoriesMenu';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  description:
    'Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Navigation bgBlack />
        <main>
          {children}
          <section className="px-6 pt-14 md:px-10">
            <CategoriesMenu />
          </section>
          <About />
        </main>
        <Footer />
      </body>
    </html>
  );
}
