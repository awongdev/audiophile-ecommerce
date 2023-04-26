const Header = ({ category }: { category: string }) => {
  return (
    <header className="bg-clr-black-900 text-center">
      <h1 className="py-8 text-[1.75rem] font-bold uppercase tracking-[1.43px] text-clr-white-50 sm:py-24 sm:text-[2.5rem]">
        {category}
      </h1>
    </header>
  );
};

export default Header;
