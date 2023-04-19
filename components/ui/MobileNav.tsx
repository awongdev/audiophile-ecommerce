import Categories from '../Categories';

interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const MobileNav = ({ setIsMenuOpen }: Props) => {
  return (
    <div className="absolute w-full lg:hidden">
      <div className="relative z-30 rounded-b-[8px] bg-clr-white-50 pb-9 pt-20 md:pt-24">
        <Categories />
      </div>

      {/* Menu overlay that closes menu when clicked */}
      <div
        className="fixed inset-0 z-[-1] bg-clr-black-900 opacity-40"
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </div>
  );
};

export default MobileNav;
