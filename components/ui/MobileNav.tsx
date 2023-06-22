import Categories from '../CategoriesMenu';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleNav } from '@/redux/features/navigationMenuSlice';
import { Transition } from '@headlessui/react';

const MobileNav = () => {
  const dispatch = useAppDispatch();
  const navIsOpen = useAppSelector((state) => state.navigationMenu.isOpen);

  return (
    <Transition
      show={navIsOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute z-40 w-full lg:hidden">
        <div className="relative z-30 rounded-b-[8px] bg-clr-white-50 px-6 pb-9 pt-20 md:px-10 md:pt-24">
          <Categories />
        </div>

        {/* Menu overlay */}
        <div
          className="fixed inset-0 bg-clr-black-900 opacity-40"
          onClick={() => dispatch(toggleNav())}
        ></div>
      </div>
    </Transition>
  );
};

export default MobileNav;
