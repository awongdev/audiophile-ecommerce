'use client';
import { Fragment, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CheckmarkIcon from '../../public/assets/checkout/icon-order-confirmation.svg';
import Button from '../ui/Button';
import { grandTotal, cartSubtotal, itemPriceTotal } from '@/utils/cartPrice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
  closeOrderModal,
  toggleShowMore,
} from '@/redux/features/orderModalSlice';
import { Dialog, Transition } from '@headlessui/react';

const CheckoutConfirmation = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.orderModal.orderSuccessModal);
  const showMore = useAppSelector((state) => state.orderModal.showMore);
  const topOfModal = useRef<HTMLDivElement>(null);
  const sessionCart = JSON.parse(sessionStorage.getItem('cart') || '{}');

  return (
    <>
      {sessionCart.length > 0 && (
        <Transition appear={true} show={isOpen} as={Fragment}>
          <Dialog
            onClose={() => {
              dispatch(closeOrderModal());
            }}
            initialFocus={topOfModal}
          >
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-300 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-y-0 left-0 z-50 w-screen overflow-y-auto bg-clr-black-900/50">
                <div
                  className="flex min-h-screen items-center justify-center"
                  ref={topOfModal}
                >
                  <Dialog.Panel>
                    <div className="m-6 flex flex-col gap-6 rounded-lg bg-clr-white-50 p-8 md:gap-8 md:p-12">
                      <CheckmarkIcon />
                      <div>
                        <Dialog.Title className="mb-4 text-2xl font-bold uppercase md:mb-6 md:text-[2rem]">
                          Thank you
                          <br /> for your order
                        </Dialog.Title>
                        <Dialog.Description className="text-15px font-medium opacity-50">
                          You will receive an email confirmation shortly.
                        </Dialog.Description>
                      </div>
                      <div className="overflow-hidden rounded-lg md:mb-[0.875rem] md:flex md:min-w-[27.75rem]">
                        <div className="flex min-h-[8.75rem] w-full flex-col justify-center gap-4 bg-clr-white-150 p-6 md:min-w-[15.375rem]">
                          {sessionCart.map((item: CartItem) => (
                            <div
                              key={item.id}
                              className={`items-center first:flex xs:flex-row ${
                                showMore ? 'flex' : 'hidden'
                              }`}
                            >
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="h-[3.125rem] w-[3.125rem]"
                              />
                              <div className="flex w-full justify-between">
                                <div className="mr-2 xs:ml-4">
                                  <h3 className="text-15px font-bold">
                                    {item.name.substring(
                                      0,
                                      item.name.lastIndexOf(' '),
                                    )}
                                  </h3>
                                  <p className="text-sm font-bold opacity-50">
                                    ${' '}
                                    {itemPriceTotal(
                                      item.price,
                                      item.quantity,
                                    ).toLocaleString()}
                                  </p>
                                </div>
                                <p className="text-15px font-bold opacity-50">
                                  x{item.quantity}
                                </p>
                              </div>
                            </div>
                          ))}
                          {sessionCart.length > 1 && (
                            <div className="flex w-full justify-center border-t pt-3">
                              <button
                                className="text-xs font-bold opacity-50 transition-colors duration-200 hover:text-clr-orange-900"
                                onClick={() => dispatch(toggleShowMore())}
                              >
                                {showMore
                                  ? 'View less'
                                  : `and ${
                                      sessionCart.length - 1
                                    } other item(s)`}
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="flex w-full flex-col justify-end bg-clr-black-900 px-6 py-4 md:px-8 md:py-10">
                          <h3 className="mb-2 text-15px font-medium uppercase text-clr-white-50 opacity-50">
                            Grand Total
                          </h3>
                          <p className="text-lg font-bold text-clr-white-50">
                            ${' '}
                            {grandTotal(
                              cartSubtotal(sessionCart),
                            ).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>
                      </div>
                      <Link href="/" className="flex flex-col">
                        <Button colors="orange">Back to home</Button>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      )}
    </>
  );
};
export default CheckoutConfirmation;
