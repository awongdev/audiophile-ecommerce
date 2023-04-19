import Image from 'next/image';
import Logo from '../../public/assets/shared/logo.svg';
import NavLinks from './NavLinks';
import FacebookIcon from '../../public/assets/shared/icon-facebook.svg';
import TwitterIcon from '../../public/assets/shared/icon-twitter.svg';
import InstagramIcon from '../../public/assets/shared/icon-instagram.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative flex justify-center bg-clr-black-850 px-6 py-14 md:px-10">
      <div className="flex w-full max-w-1110 flex-col items-center gap-12 text-center after:absolute after:left-2/4 after:top-0 after:h-1 after:w-[6.313rem] after:-translate-x-2/4 after:bg-clr-orange-900 md:items-start md:text-left md:after:left-auto after:md:translate-x-0">
        <div className="flex flex-col gap-12 lg:w-full lg:flex-row lg:justify-between">
          <Image src={Logo} alt="logo" />
          <NavLinks classes="flex-col flex gap-4 md:flex-row" />
        </div>
        <p className="text-15px font-medium text-white opacity-40 md:max-w-3xl lg:max-w-[33.75rem]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="flex w-full flex-col items-center gap-12 md:mt-8 md:flex-row md:justify-between">
          <p className="text-15px font-medium text-white opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Image src={FacebookIcon} alt="facebook" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Image src={TwitterIcon} alt="twitter" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image src={InstagramIcon} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
