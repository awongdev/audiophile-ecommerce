'use client';
import Image from 'next/image';

import { useEffect } from 'react';
import testImg from '../../public/assets/cart/image-xx59-headphones.jpg';
import useFetchItem from '@/utils/useFetchItem';
import Button from '../ui/Button';

const CheckoutSummary = () => {
  const [TEST]: Product[] = useFetchItem('xx99-mark-one-headphones');
  useEffect(() => {
    console.log(TEST);
  }, [TEST]);
  return (
    <section className="flex justify-center self-start">
      <div className="mx-6 flex w-full max-w-[45.625rem] flex-col gap-6 rounded-lg bg-clr-white-50 px-6 py-8 md:mx-10 md:p-8 xl:m-0 xl:max-w-[350px]">
        <h2 className="mb-2 text-lg font-bold uppercase tracking-[1.29px]">
          Summary
        </h2>
        {/* Items */}
        <div className="grid grid-cols-[4rem_1fr_1.5rem] items-center">
          <Image
            src={testImg}
            alt=""
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-15px font-bold uppercase">{TEST.name}</h3>
            <p className="text-sm font-bold opacity-50">{`$ ${TEST.price.toLocaleString()}`}</p>
          </div>
          <p className="justify-self-end text-15px font-bold opacity-50">x1</p>
        </div>
        <div className="grid grid-cols-[4rem_1fr_1.5rem] items-center">
          <Image
            src={testImg}
            alt=""
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-15px font-bold uppercase">{TEST.name}</h3>
            <p className="text-sm font-bold opacity-50">{`$ ${TEST.price.toLocaleString()}`}</p>
          </div>
          <p className="justify-self-end text-15px font-bold opacity-50">x1</p>
        </div>
        <div className="grid grid-cols-[4rem_1fr_1.5rem] items-center">
          <Image
            src={testImg}
            alt=""
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div className="ml-6">
            <h3 className="text-15px font-bold uppercase">{TEST.name}</h3>
            <p className="text-sm font-bold opacity-50">{`$ ${TEST.price.toLocaleString()}`}</p>
          </div>
          <p className="justify-self-end text-15px font-bold opacity-50">x1</p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              Total
            </h4>
            <p className="text-lg font-bold">$ 5,396</p>
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
            <p className="text-lg font-bold">$ 1,079</p>
          </div>
          <div className="mb-2 mt-4 flex items-center justify-between">
            <h4 className="text-15px font-medium uppercase opacity-50">
              Grand Total
            </h4>
            <p className="text-lg font-bold text-clr-orange-900">$ 5,446</p>
          </div>
        </div>
        <Button colors="orange">Continue & Pay</Button>
      </div>
    </section>
  );
};

export default CheckoutSummary;
