import { toggleCartModal } from '@/redux/features/cartModalSlice';
import { useAppDispatch } from '@/redux/hooks';
import Button from './Button';
import Link from 'next/link';

const CartSummary = () => {
  const dispatch = useAppDispatch();
  return (
    <section
      className="fixed inset-0 z-[-1] bg-clr-black-900/50 px-6"
      onClick={(e) => {
        e.target === e.currentTarget ? dispatch(toggleCartModal()) : null;
      }}
    >
      <div className="relative mx-auto max-w-1110">
        <div className="absolute right-0 top-[7.125rem] flex w-full max-w-[23.563rem] flex-col gap-6 rounded-lg bg-clr-white-50 px-6 py-8">
          <div className="mb-2 flex items-end justify-between">
            <h2 className="text-lg font-bold uppercase">Cart (3)</h2>
            <button className="text-15px font-medium text-clr-black-900/50 underline transition-colors duration-200 hover:text-clr-orange-900">
              Remove all
            </button>
          </div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <div>IMG</div>
            <div>
              <h3 className="text-15px font-bold">XX99 MK II</h3>
              <p className="text-sm font-bold text-clr-black-900/50">$2,999</p>
            </div>
            <div className="flex items-center bg-clr-white-150">
              <button className="px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900">
                -
              </button>
              <p className="px-3.5 text-[0.813rem] font-bold">1</p>
              <button className="px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900">
                +
              </button>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <div>IMG</div>
            <div>
              <h3 className="text-15px font-bold">XX99 MK II</h3>
              <p className="text-sm font-bold text-clr-black-900/50">$2,999</p>
            </div>
            <div className="flex items-center bg-clr-white-150">
              <button className="px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900">
                -
              </button>
              <p className="px-3.5 text-[0.813rem] font-bold">1</p>
              <button className="px-3 py-1.5 text-[0.813rem] text-[#c5c5c5] transition-colors duration-200 hover:bg-[#E3E3E3] hover:text-clr-orange-900">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-15px font-medium uppercase text-clr-black-900/50">
              Total
            </h3>
            <p className="text-lg font-bold">$5,396</p>
          </div>
          <Link href="/checkout" className="flex flex-col">
            <Button colors="orange">Checkout</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;
