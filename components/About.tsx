import Image from 'next/image';
import aboutImgMobile from '../public/assets/shared/mobile/image-best-gear.jpg';
import aboutImgTablet from '../public/assets/shared/tablet/image-best-gear.jpg';
import aboutImgDesktop from '../public/assets/shared/desktop/image-best-gear.jpg';

const About = () => {
  return (
    <section className="flex justify-center px-6 py-[7.5rem] md:px-10 lg:py-52">
      <div className="flex w-full max-w-1110 flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-10">
        <picture className="mb-10 md:mb-16 lg:mb-0">
          <source media="(min-width: 64rem)" srcSet={aboutImgDesktop.src} />
          <source media="(min-width: 48rem)" srcSet={aboutImgTablet.src} />
          <Image
            src={aboutImgMobile}
            alt="Audiophile user with XX99 Mark II Headphones"
            priority
            className="w-full rounded-lg lg:max-h-[36.75rem]"
          />
        </picture>
        <div className="text-center md:max-w-3xl lg:max-w-md lg:text-left">
          <h3 className="mb-8 text-[1.75rem] font-bold uppercase leading-9 tracking-[1px] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.43px]">
            Bringing you the <span className="text-clr-orange-900">best</span>{' '}
            audio gear
          </h3>
          <p className="text-15px font-medium leading-6 opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
