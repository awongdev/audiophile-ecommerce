import Image from 'next/image';
import Link from 'next/link';
import headphonesImg from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png';

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
  return (
    <div className="mx-6 flex flex-col items-center justify-center gap-16 md:mx-10 md:flex-row md:gap-3">
      {category.map(({ category, img, to, id, description }) => (
        <div
          key={id}
          className="relative flex min-h-[10.313rem] w-full max-w-[21.875rem] flex-col items-center justify-end gap-4 rounded-lg bg-clr-white-150 pb-6 lg:min-h-[12.75rem] lg:pb-[1.875rem]"
        >
          <Image
            src={img}
            alt={description}
            className="absolute -top-1/4 max-h-[8.375rem] object-contain lg:max-h-[10.25rem]"
          />
          <h2 className="text-15px font-bold tracking-[1.07px] text-clr-black-900">
            {category}
          </h2>
          <Link
            href={to}
            className="flex items-center p-1 text-[0.813rem] font-bold"
          >
            <span className="pr-3 leading-none opacity-50">SHOP</span>
            <span className="content-arrow"></span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
