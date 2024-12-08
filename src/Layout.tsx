import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen mx-auto shadow-md max-w-screen-default ">
      {children}
    </div>
  );
};

export default Layout;
