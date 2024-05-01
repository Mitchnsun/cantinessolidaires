'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'large';
  appName: string;
}

export const Button = ({ children, className, size, appName }: ButtonProps) => {
  const classes = clsx('bg-primary text-white', className);
  return (
    <button
      className={classes}
      style={{
        fontSize: size === 'large' ? '24px' : '14px',
      }}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
