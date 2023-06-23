import './globals.css';
import { Manrope } from 'next/font/google';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Providers } from '@/redux/provider';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Audiophile',
  description:
    'Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
