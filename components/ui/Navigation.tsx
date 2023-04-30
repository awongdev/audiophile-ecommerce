'use client';
import Image from 'next/image';
import Logo from '../../public/assets/shared/logo.svg';
import HamburgerIcon from '../../public/assets/shared/icon-hamburger.svg';
import CartIcon from '../../public/assets/shared/icon-cart.svg';
import NavLinks from './NavLinks';
import { useState } from 'react';
import MobileNav from './MobileNav';
import Link from 'next/link';

interface Props {
  bgBlack?: boolean;
}

const Navigation = ({ bgBlack }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className={`relative z-30 ${bgBlack ? 'bg-clr-black-900' : ''}`}>
      <div className="flex justify-center px-6 md:px-10">
        <div className="flex w-full max-w-1110 items-center justify-between border-b border-clr-white-50 border-opacity-10 py-8">
          <HamburgerIcon
            title="Hamburger menu"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          />
          <Link href="/" className="md:absolute md:left-24 lg:static">
            <Logo title="Audiophile logo" />
          </Link>
          <NavLinks classes="gap-8 hidden lg:flex" />
          <CartIcon title="Shopping cart" />
        </div>
      </div>
      {isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
};

export default Navigation;
