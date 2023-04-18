import Link from 'next/link';

interface Props {
  classes: string;
}

const NavLinks = ({ classes }: Props) => {
  const links = [
    { title: 'HOME', to: '/', id: 1 },
    { title: 'HEADPHONES', to: '/headphones', id: 2 },
    { title: 'SPEAKERS', to: '/speakers', id: 3 },
    { title: 'EARPHONES', to: '/earphones', id: 4 },
  ];
  return (
    <div
      className={`text-[0.813rem] font-bold tracking-[2px] text-clr-white-50 ${classes}`}
    >
      {links.map(({ title, to, id }) => (
        <Link key={id} href={to}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
