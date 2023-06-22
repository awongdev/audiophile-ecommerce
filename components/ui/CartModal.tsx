import { Fragment } from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { itemPriceTotal, cartSubtotal } from '@/utils/cartPrice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleCartModal } from '@/redux/features/cartModalSlice';
import {
  clearCart,
  increment,
  decrement,
} from '@/redux/features/localCartSlice';
import { Transition } from '@headlessui/react';

const CartModal = () => {
  const cartIsOpen = useAppSelector((state) => state.cartModal.isOpen);
  const cart = useAppSelector((state) => state.cart.localCart);
  const dispatch = useAppDispatch();

  return (
    <Transition
      as={Fragment}
      show={cartIsOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <section className="absolute inset-0 z-[10] bg-clr-black-900/50 px-6">
        <div
          className="fixed inset-0 bg-clr-black-900/50"
          onClick={(e) => {
            e.target === e.currentTarget ? dispatch(toggleCartModal()) : null;
          }}
        ></div>
        <div className="relative mx-auto max-w-1110">
          <div className="absolute right-0 top-[7.125rem] flex w-full max-w-[23.563rem] flex-col gap-6 rounded-lg bg-clr-white-50 px-6 py-8">
            <div className="mb-2 flex items-end justify-between">
              <h2 className="text-lg font-bold uppercase">{`Cart (${cart.length})`}</h2>
              {cart.length !== 0 ? (
                <button
                  className="text-15px font-medium text-clr-black-900/50 underline transition-colors duration-200 hover:text-clr-orange-900"
                  onClick={() => dispatch(clearCart())}
                >
                  Remove all
                </button>
              ) : null}
            </div>

            {cart.map((item: CartItem) => {
              return (
                <div
                  key={item.id}
                  className="mb-2 flex flex-col justify-between gap-3 xs:flex-row xs:items-center"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      priority
                      src={item.img}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    ></Image>
                    <div>
                      <h3 className="text-15px font-bold">
                        {item.name.substring(0, item.name.lastIndexOf(' '))}
                      </h3>
                      <p className="text-sm font-bold text-clr-black-900/50">
                        ${' '}
                        {itemPriceTotal(
                          item.price,
                          item.quantity,
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-clr-white-150 px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900"
                      onClick={() => dispatch(decrement(item))}
                    >
                      -
                    </button>
                    <p className="w-9 bg-clr-white-150 py-1.5 text-center text-[0.813rem] font-bold">
                      {item.quantity}
                    </p>
                    <button
                      className="bg-clr-white-150 px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900"
                      onClick={() => dispatch(increment(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

            {cart.length == 0 ? (
              <p className="text-center text-lg font-bold">
                Your cart is empty.
              </p>
            ) : (
              <div className="flex items-center justify-between">
                <h3 className="text-15px font-medium uppercase text-clr-black-900/50">
                  Total
                </h3>
                <p className="text-lg font-bold">
                  $ {cartSubtotal(cart).toLocaleString()}
                </p>
              </div>
            )}
            {cart.length === 0 ? (
              <div
                className="flex flex-col"
                onClick={() => dispatch(toggleCartModal())}
              >
                <Button colors="orange">Continue Shopping</Button>
              </div>
            ) : (
              <Link href="/checkout" className="flex flex-col">
                <Button colors="orange">Checkout</Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default CartModal;
