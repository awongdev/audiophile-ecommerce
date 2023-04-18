'use client';
import Image from 'next/image';
import Logo from '../../public/assets/shared/logo.svg';
import HamburgerIcon from '../../public/assets/shared/icon-hamburger.svg';
import CartIcon from '../../public/assets/shared/icon-cart.svg';
import NavLinks from './NavLinks';
import { useState } from 'react';
import MobileNav from './MobileNav';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="bg-black">
        <div className="mx-auto flex max-w-1110 items-center justify-between px-6 py-8 md:px-10">
          <Image
            src={HamburgerIcon}
            alt="Hamburger menu"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          />
          <Link href="/" className="md:absolute md:left-24 lg:static">
            <Image src={Logo} alt="Audiophile logo" />
          </Link>
          <NavLinks classes="gap-8 hidden lg:flex" />
          <Image src={CartIcon} alt="Shopping cart" />
        </div>
      </div>
      {isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
};

export default Navigation;
