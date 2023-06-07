'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  increment,
  decrement,
  reset,
} from '@/redux/features/itemQuantitySlice';
import { useEffect } from 'react';
import { addToCart } from '@/redux/features/localCartSlice';

interface DescriptionT {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  name: string;
  description: string;
  price: number;
  slug: string;
  id: number;
}

const Description = ({ item }: { item: DescriptionT }) => {
  const quantity = useAppSelector((state) => state.itemQuantity.quantity);
  const dispatch = useAppDispatch();
  const lineBreakWord = /(headphones|earphones|speaker)/gi;

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="sm:flex sm:items-center sm:justify-between sm:gap-6 md:gap-16">
      <picture>
        <source
          srcSet={item.image.desktop.substring(1)}
          media="(min-width: 64rem)"
        />
        <source
          srcSet={item.image.tablet.substring(1)}
          media="(min-width: 40rem)"
        />
        <Image
          src={item.image.mobile.substring(1)}
          alt={item.name}
          priority
          width={540}
          height={560}
          className="mb-8 w-full rounded-lg object-contain sm:mb-0 sm:min-w-[17.5rem] lg:max-h-[35rem] lg:min-w-0"
        />
      </picture>
      <div className="max-w-md">
        {item.new ? (
          <p className="mb-6 text-sm uppercase tracking-[10px] text-clr-orange-900 sm:mb-4 sm:text-xs sm:tracking-[8.57px]">
            New Product
          </p>
        ) : null}
        <h1 className="mb-6 max-w-sm whitespace-pre-line text-[1.75rem] font-bold uppercase leading-[38.25px] tracking-[1px] sm:mb-8">
          {item.name.replace(lineBreakWord, '\n$&')}
        </h1>
        <p className="mb-6 text-15px font-medium opacity-50 sm:mb-8">
          {item.description}
        </p>
        <p className="letter-[1.29px] mb-8 text-lg font-bold">{`$ ${item.price.toLocaleString()}`}</p>

        <div className="flex flex-wrap gap-4">
          <div className="flex bg-clr-white-150 text-[13px] font-bold">
            <button
              onClick={() => dispatch(decrement())}
              className="px-5 py-4 text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900"
            >
              -
            </button>
            <div className="px-5 py-4">
              <p className="w-[14.25px] text-center">{quantity}</p>
            </div>
            <button
              onClick={() => dispatch(increment())}
              className="px-5 py-4 text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900"
            >
              +
            </button>
          </div>
          <div onClick={() => dispatch(addToCart([item, quantity]))}>
            <Button colors="orange">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
