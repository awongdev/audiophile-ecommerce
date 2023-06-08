import Image from 'next/image';
import Link from 'next/link';
import PatternCircles from '../../public/assets/home/desktop/pattern-circles.svg';
import zx9Img from '../../public/assets/home/desktop/image-speaker-zx9.png';
import zx7ImgMobile from '../../public/assets/home/mobile/image-speaker-zx7.jpg';
import zx7ImgTablet from '../../public/assets/home/tablet/image-speaker-zx7.jpg';
import zx7ImgDesktop from '../../public/assets/home/desktop/image-speaker-zx7.jpg';
import yx1ImgMobile from '../../public/assets/home/mobile/image-earphones-yx1.jpg';
import yx1ImgTablet from '../../public/assets/home/tablet/image-earphones-yx1.jpg';
import yx1ImgDesktop from '../../public/assets/home/desktop/image-earphones-yx1.jpg';
import Button from '../ui/Button';

const ProductsDisplay = () => {
  return (
    <section>
      <div className="mx-6 flex justify-center md:mx-10">
        <div className="flex w-full max-w-1110 flex-col gap-8">
          {/* ZX9 Speaker */}
          <div className="relative min-h-[37.5rem] overflow-hidden rounded-lg bg-clr-orange-900 md:min-h-[45rem] lg:flex lg:min-h-[35rem] lg:items-center lg:justify-end">
            <div className="pb-8 pt-14 md:pb-16 lg:p-0">
              <Image
                src={zx9Img}
                alt="ZX9 Speaker"
                className="relative z-10 mx-auto max-h-[12.938rem] object-contain md:max-h-[14.813rem] lg:absolute lg:-bottom-[15px] lg:left-[-50px] lg:mx-0 lg:max-h-[30.813rem]"
              />
              <PatternCircles
                viewBox="0 0 944 944"
                className="absolute -top-[115px] left-2/4 h-[34.875rem] w-[34.875rem] -translate-x-2/4 object-cover md:-top-[275px] md:h-[59rem] md:w-[59rem] lg:bottom-[-350px] lg:left-[-150px] lg:top-auto lg:translate-x-0"
              />
            </div>
            <div className="relative z-10 mx-auto max-w-[21.813rem] px-6 text-center md:px-0 lg:mx-0 lg:mr-6 lg:text-left xl:mr-24">
              <h3 className="pb-6 text-4xl font-bold uppercase leading-10 tracking-[1.29px] text-clr-white-50 md:text-[3.5rem] md:leading-[3.5rem] md:tracking-[2px]">
                ZX9 <br />
                Speaker
              </h3>
              <p className="pb-6 text-15px font-medium leading-6 text-clr-white-50 opacity-75 md:pb-10">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/speakers/zx9-speaker">
                <Button colors="black">SEE PRODUCT</Button>
              </Link>
            </div>
          </div>
          {/* ZX7 Speaker */}
          <div className="relative">
            <picture>
              <source media="(min-width: 64rem)" srcSet={zx7ImgDesktop.src} />
              <source media="(min-width: 48rem)" srcSet={zx7ImgTablet.src} />
              <Image
                src={zx7ImgMobile}
                alt="ZX7 Speaker"
                className="w-full rounded-lg object-cover md:max-h-[20rem]"
              />
            </picture>
            <div className="absolute left-6 top-2/4 z-10 -translate-y-2/4 sm:left-16">
              <h3 className="mb-8 text-[1.75rem] font-bold uppercase tracking-[2px] md:leading-[3.5rem] md:tracking-[2px]">
                ZX7 Speaker
              </h3>
              <Link href="/speakers/zx7-speaker">
                <Button colors="transparent">SEE PRODUCT</Button>
              </Link>
            </div>
          </div>
          {/* YX1 Earphones */}
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-[0.625rem] lg:gap-[1.875rem]">
            <picture className="flex-1">
              <source media="(min-width: 64rem)" srcSet={yx1ImgDesktop.src} />
              <source media="(min-width: 48rem)" srcSet={yx1ImgTablet.src} />
              <Image
                src={yx1ImgMobile}
                alt="YX1 Earphones"
                className="w-full rounded-lg object-cover"
              />
            </picture>
            <div className="relative flex aspect-[327/200] flex-1 flex-col items-start justify-center rounded-lg bg-clr-white-150 md:aspect-auto">
              <div className="absolute left-6 sm:left-16 md:left-12 lg:left-16">
                <h3 className="mb-8 text-[1.5rem] font-bold uppercase tracking-[2px] sm:text-[1.75rem] md:leading-[3.5rem] md:tracking-[2px]">
                  YX1 Earphones
                </h3>
                <Link href="/earphones/yx1-earphones">
                  <Button colors="transparent">SEE PRODUCT</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;
