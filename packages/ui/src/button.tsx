'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick = () => {} }: ButtonProps) => {
  const classes = clsx('bg-primary rounded px-6 py-3 text-white hover:bg-blue-500', className);
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
