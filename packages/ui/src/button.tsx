'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  primary?: boolean;
  size?: 'small' | 'large';
  appName: string;
}

export const Button = ({ children, className, primary, size, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      style={{
        backgroundColor: primary ? 'red' : 'blue',
        fontSize: size === 'large' ? '24px' : '14px',
      }}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
