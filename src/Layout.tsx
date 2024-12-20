import { ReactNode } from 'react';
import SpriteSheet from '@/components/icon/SpriteSheet';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-screen-lg min-h-screen mx-auto overflow-x-hidden shadow-md bg-mainBackground">
      {SpriteSheet}
      {children}
    </div>
  );
};

export default Layout;
