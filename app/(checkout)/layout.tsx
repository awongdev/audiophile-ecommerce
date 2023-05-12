import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';
import { Manrope } from 'next/font/google';
import '../globals.css';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Navigation bgBlack />
        <main className="bg-clr-white-150 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}