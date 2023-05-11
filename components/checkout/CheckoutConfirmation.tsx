import Image from 'next/image';
import CheckmarkIcon from '../../public/assets/checkout/icon-order-confirmation.svg';

import TEST_IMG from '../../public/assets/cart/image-xx59-headphones.jpg';
import Button from '../ui/Button';

const Confirmation = () => {
  return (
    <div className="absolute inset-0 bg-clr-black-900/50">
      <div className="flex justify-center">
        <div className="mx-6 mt-32 flex flex-col gap-6 rounded-lg bg-clr-white-50 p-8 md:gap-8 md:p-12">
          <CheckmarkIcon />
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase md:mb-6 md:text-[2rem]">
              Thank you
              <br /> for your order
            </h2>
            <p className="text-15px font-medium opacity-50">
              You will receive an email confirmation shortly.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg md:mb-[0.875rem] md:flex md:min-w-[27.75rem]">
            <div className="flex w-full flex-col bg-clr-white-150 md:min-w-[15.375rem]">
              <div className="mx-6 mt-6 flex items-center border-b pb-3 xs:flex-row">
                <Image
                  src={TEST_IMG}
                  alt="test"
                  width={50}
                  height={50}
                  className="h-[3.125rem] w-[3.125rem]"
                />
                <div className="flex w-full justify-between">
                  <div className="mr-2 xs:ml-4">
                    <h3 className="text-15px font-bold">XX99 MK II</h3>
                    <p className="text-sm font-bold opacity-50">$ 2,999</p>
                  </div>
                  <p className="text-15px font-bold opacity-50">x1</p>
                </div>
              </div>
              <div className="mx-auto pb-6 pt-3">
                <p className="text-xs font-bold opacity-50">
                  and 2 other item(s)
                </p>
              </div>
            </div>
            <div className="w-full bg-clr-black-900 px-6 py-4 md:px-8 md:py-10">
              <h3 className="mb-2 text-15px font-medium uppercase text-clr-white-50 opacity-50">
                Grand Total
              </h3>
              <p className="text-lg font-bold text-clr-white-50">$ 5,446</p>
            </div>
          </div>
          <Button colors="orange">Back to home</Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
