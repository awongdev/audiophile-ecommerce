'use client';
import Link from 'next/link';
import Logo from '../../public/assets/shared/logo.svg';
import CartIcon from '../../public/assets/shared/icon-cart.svg';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import CartModal from './CartModal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleCartModal } from '@/redux/features/cartModalSlice';
import HamburgerIcon from './HamburgerIcon';
import { useSelectedLayoutSegment } from 'next/navigation';

const Navigation = () => {
  const navIsOpen = useAppSelector((state) => state.navigationMenu.isOpen);
  const cart = useAppSelector((state) => state.cart.localCart);
  const dispatch = useAppDispatch();
  const segment = useSelectedLayoutSegment();

  const quantityInCart = (cart: CartItem[]) => {
    let quantity = 0;
    cart.map((item: CartItem) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  return (
    <nav
      className={`relative z-30 ${
        segment === null ? 'bg-[#191919]' : 'bg-clr-black-900'
      }`}
    >
      <div className="flex justify-center px-6 md:px-10">
        <div className="flex w-full max-w-1110 items-center justify-between border-b border-clr-white-50 border-opacity-10 py-8">
          <div className={`relative lg:hidden ${navIsOpen ? 'z-50' : ''}`}>
            <HamburgerIcon />
          </div>

          <Link
            href="/"
            className="md:absolute md:left-24 lg:static"
            aria-label="Home"
          >
            <Logo title="Audiophile logo" />
          </Link>
          <NavLinks classes="gap-8 hidden lg:flex" />
          <button
            aria-label="Toggle cart"
            className={`relative cursor-pointer ${navIsOpen ? '' : 'z-50'}`}
            onClick={() => {
              dispatch(toggleCartModal());
            }}
          >
            <CartIcon title="Shopping cart" />
            {quantityInCart(cart) !== 0 && (
              <div className="absolute -right-2/4 -top-2/4 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-clr-orange-900 px-1 text-[10px] text-clr-white-50">
                <span className="select-none">{quantityInCart(cart)}</span>
              </div>
            )}
          </button>
        </div>
      </div>
      <CartModal />
      <MobileNav />
    </nav>
  );
};

export default Navigation;
