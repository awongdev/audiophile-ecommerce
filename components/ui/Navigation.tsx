'use client';
import Link from 'next/link';
import Logo from '../../public/assets/shared/logo.svg';
import HamburgerIcon from '../../public/assets/shared/icon-hamburger.svg';
import CartIcon from '../../public/assets/shared/icon-cart.svg';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import CartSummary from './CartSummary';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleNav } from '@/redux/features/navigationMenuSlice';
import { toggleCartModal } from '@/redux/features/cartModalSlice';

interface Props {
  bgBlack?: boolean;
}

const Navigation = ({ bgBlack }: Props) => {
  const navIsOpen = useAppSelector((state) => state.navigationMenu.isOpen);
  const cartIsOpen = useAppSelector((state) => state.cartModal.isOpen);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`relative z-30  ${bgBlack || true ? 'bg-clr-black-900' : ''}`}
    >
      <div className="flex justify-center px-6 md:px-10">
        <div className="flex w-full max-w-1110 items-center justify-between border-b border-clr-white-50 border-opacity-10 py-8">
          <HamburgerIcon
            title="Hamburger menu"
            className="lg:hidden"
            onClick={() => dispatch(toggleNav())}
          />
          <Link href="/" className="md:absolute md:left-24 lg:static">
            <Logo title="Audiophile logo" />
          </Link>
          <NavLinks classes="gap-8 hidden lg:flex" />
          <CartIcon
            title="Shopping cart"
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleCartModal());
              console.log('clicked');
            }}
          />
          {cartIsOpen && <CartSummary />}
        </div>
      </div>
      {navIsOpen && <MobileNav />}
    </nav>
  );
};

export default Navigation;
