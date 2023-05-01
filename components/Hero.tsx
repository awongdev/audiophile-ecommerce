import Image from 'next/image';
import heroImgMobile from '../public/assets/home/mobile/image-header.jpg';
import heroImgTablet from '../public/assets/home/tablet/image-header.jpg';
import heroImgDesktop from '../public/assets/home/desktop/image-hero.jpg';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="-mt-[5.625rem] flex justify-center bg-[#191919]">
      <div className="relative w-full max-w-1110 lg:mx-10">
        <div className="absolute left-2/4 top-2/4 z-[2] mt-[3.125rem] max-w-md -translate-x-2/4 -translate-y-2/4 px-6 text-center lg:left-0 lg:translate-x-0 lg:px-0 lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[10px] text-clr-white-50 opacity-50 md:mb-6">
            New Product
          </p>
          <h1 className="mb-6 text-4xl font-bold uppercase leading-10 tracking-[1.285px] text-clr-white-50 md:text-[3.5rem] md:leading-[3.5rem] md:tracking-[2px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mb-7 text-15px font-medium leading-6 text-clr-white-50 opacity-75 md:mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <Button colors="orange">SEE PRODUCT</Button>
          </Link>
        </div>
        <picture>
          <source media="(min-width: 64rem)" srcSet={heroImgDesktop.src} />
          <source media="(min-width: 48rem)" srcSet={heroImgTablet.src} />
          <Image
            src={heroImgMobile}
            priority
            alt="XX99 Mark 2 Headphones"
            className="relative z-[1] mx-auto w-full object-cover md:min-h-[45.563rem]"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
