import Categories from '../CategoriesMenu';
import { useAppDispatch } from '@/redux/hooks';
import { setNavToggle } from '@/redux/features/navigationMenuSlice';

const MobileNav = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="absolute w-full lg:hidden">
      <div className="relative z-30 rounded-b-[8px] bg-clr-white-50 px-6 pb-9 pt-20 md:px-10 md:pt-24">
        <Categories />
      </div>

      {/* Menu overlay that closes menu when clicked */}
      <div
        className="fixed inset-0 z-[-1] bg-clr-black-900 opacity-40"
        onClick={() => dispatch(setNavToggle())}
      ></div>
    </div>
  );
};

export default MobileNav;
