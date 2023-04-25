'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  colors: 'orange' | 'black' | 'transparent';
}

const Button = ({ children, colors }: Props) => {
  const classes = {
    orange: 'bg-clr-orange-900 hover:bg-clr-orange-700 text-clr-white-50',
    black: 'bg-clr-black-900 hover:bg-[#4C4C4C] text-clr-white-50',
    transparent:
      'bg-transparent text-clr-black-900 hover:bg-clr-black-900 hover:text-clr-white-50 border border-clr-black-900',
  };

  return (
    <button
      className={`px-8 py-4 text-[0.813rem] font-bold uppercase tracking-[1px] transition-colors duration-200 ${classes[colors]} `}
    >
      {children}
    </button>
  );
};
// color, border, text-color, hover. width?

export default Button;
