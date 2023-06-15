'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import {
  itemPriceTotal,
  cartSubtotal,
  calcVat,
  grandTotal,
} from '@/utils/cartPrice';
import { useAppSelector } from '@/redux/hooks';

const CheckoutSummary = () => {
  const cart = useAppSelector((state) => state.cart.localCart);
  const subtotal = cartSubtotal(cart);

  return (
    <section className="flex justify-center self-start">
      <div className="mx-6 flex w-full max-w-[45.625rem] flex-col gap-6 rounded-lg bg-clr-white-50 px-6 py-8 md:mx-10 md:p-8 xl:m-0 xl:w-[21.875rem]">
        <h2 className="mb-2 text-lg font-bold uppercase tracking-[1.29px]">
          Summary
        </h2>
        {cart.map((item: CartItem) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-[4rem_1fr_1.5rem] items-center"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div className="ml-6">
                <h3 className="text-15px font-bold uppercase">
                  {item.name.substring(0, item.name.lastIndexOf(' '))}
                </h3>
                <p className="text-sm font-bold opacity-50">
                  $ {itemPriceTotal(item.price, item.quantity).toLocaleString()}
                </p>
              </div>
              <p className="justify-self-end whitespace-nowrap text-15px font-bold opacity-50">
                x {item.quantity}
              </p>
            </div>
          );
        })}

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              Total
            </h4>
            <p className="text-lg font-bold">
              $ {cartSubtotal(cart).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              Shipping
            </h4>
            <p className="text-lg font-bold">$ 50</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              VAT(Included)
            </h4>
            <p className="text-lg font-bold">
              ${' '}
              {calcVat(subtotal).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="mb-2 mt-4 flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              Grand Total
            </h4>
            <p className="text-lg font-bold text-clr-orange-900">
              ${' '}
              {grandTotal(subtotal).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <Button colors="orange" form="checkout" type="submit">
          Continue & Pay
        </Button>
      </div>
    </section>
  );
};

export default CheckoutSummary;
