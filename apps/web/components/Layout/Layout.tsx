import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}
const Layout = ({ children, className }: LayoutProps) => (
  <div className={clsx('relative m-auto max-w-screen-xl p-4', className)}>{children}</div>
);

export default Layout;
