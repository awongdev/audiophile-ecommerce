import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleNav } from '@/redux/features/navigationMenuSlice';

const HamburgerIcon = () => {
  const navIsOpen = useAppSelector((state) => state.navigationMenu.isOpen);
  const dispatch = useAppDispatch();
  const hamburgerLine = `h-[3px] w-4 my-[1px] bg-clr-white-50 transition ease-in-out transform duration-300`;
  return (
    <button
      aria-label="Open navigation menu"
      className="relative flex h-4 w-4 flex-col items-center"
      onClick={() => dispatch(toggleNav())}
    >
      <div
        className={`${hamburgerLine} ${
          navIsOpen && 'translate-y-[5px] rotate-45'
        }`}
      />
      <div className={`${hamburgerLine} ${navIsOpen && 'opacity-0'}`} />
      <div
        className={`${hamburgerLine} ${
          navIsOpen && '-translate-y-[5px] -rotate-45'
        }`}
      />
    </button>
  );
};

export default HamburgerIcon;
