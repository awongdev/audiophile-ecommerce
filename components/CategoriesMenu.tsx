'use client';
import Image from 'next/image';
import Link from 'next/link';
import headphonesImg from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png';
import Arrow from '../public/assets/shared/icon-arrow-right.svg';
import { useAppDispatch } from '@/redux/hooks';
import { closeMenu } from '@/redux/features/navigationMenuSlice';

const category = [
  {
    category: 'HEADPHONES',
    description: 'Audiophile headphones',
    img: headphonesImg,
    to: '/headphones',
    id: 1,
  },
  {
    category: 'SPEAKERS',
    description: 'Audiophile speakers',
    img: speakersImg,
    to: '/speakers',
    id: 2,
  },
  {
    category: 'EARPHONES',
    description: 'Audiophile earphones',
    img: earphonesImg,
    to: '/earphones',
    id: 3,
  },
];

const Categories = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-1110 flex-col items-center gap-16 sm:flex-row sm:gap-3 md:justify-between">
        {category.map(({ category, img, to, id, description }) => (
          <Link
            href={to}
            key={id}
            className="relative flex min-h-[10.313rem] w-full flex-col items-center justify-end gap-4 rounded-lg bg-clr-white-150 pb-6 text-clr-black-900/50 transition-colors duration-200 hover:text-clr-orange-900 lg:min-h-[12.75rem] lg:pb-[1.875rem]"
            onClick={() => dispatch(closeMenu())}
          >
            <Image
              src={img}
              alt={description}
              className="absolute -top-1/4 max-h-[8.375rem] max-w-[170px] object-contain lg:max-h-[10.25rem]"
            />
            <p className="text-15px font-bold tracking-[1.07px] text-clr-black-900">
              {category}
            </p>
            <div className="flex items-center p-1 text-[0.813rem] font-bold">
              <span className="pr-3 leading-none">SHOP</span>
              <Arrow />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
