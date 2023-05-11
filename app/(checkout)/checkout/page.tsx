import CheckoutForm from '@/components/checkout/CheckoutForm';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';

const page = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="mx-6 mb-6 mt-4 w-full max-w-[45.625rem] md:mx-10 md:mt-12 xl:mb-10 xl:mt-20 xl:max-w-1110">
            <button className="text-15px font-medium opacity-50">
              Go Back
            </button>
          </div>
        </div>
        <div className="pb-24 md:pb-28 lg:pb-36 xl:flex xl:justify-center xl:gap-[1.875rem]">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};

export default page;
