import { ReactNode } from 'react';
import SpriteSheet from '@/components/icon/SpriteSheet';
import BGM from '@/components/BGM';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-screen-lg min-h-screen mx-auto overflow-x-hidden shadow-md bg-mainBackground">
      <BGM />
      {SpriteSheet}
      {children}
    </div>
  );
};

export default Layout;
