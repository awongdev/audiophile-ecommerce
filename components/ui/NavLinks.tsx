'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  classes: string;
}

const NavLinks = ({ classes }: Props) => {
  const activeSegment = useSelectedLayoutSegment();
  const links = [
    { title: 'HOME', to: '/', id: 1, targetSegment: null },
    {
      title: 'HEADPHONES',
      to: '/headphones',
      id: 2,
      targetSegment: 'headphones',
    },
    { title: 'SPEAKERS', to: '/speakers', id: 3, targetSegment: 'speakers' },
    { title: 'EARPHONES', to: '/earphones', id: 4, targetSegment: 'earphones' },
  ];
  return (
    <div
      className={`text-[0.813rem] font-bold tracking-[2px] text-clr-white-50 ${classes}`}
    >
      {links.map(({ title, to, id, targetSegment }) => (
        <Link
          key={id}
          href={to}
          className={`transition-colors duration-200 hover:text-clr-orange-900 ${
            activeSegment === targetSegment ? 'text-clr-orange-900' : ''
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
