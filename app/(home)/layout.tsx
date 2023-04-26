import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';
import '../globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Audiophile',
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
