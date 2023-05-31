import '../globals.css';
import { Manrope } from 'next/font/google';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Providers } from '@/redux/provider';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Checkout | Audiophile',
  description:
    'Review and finalize your order with ease. Enter shipping and payment details, choose from various payment methods, and securely complete your purchase. Enjoy a seamless checkout process at Audiophile.',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Providers>
          <Navigation bgBlack />
          <main className="bg-clr-white-150 ">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
