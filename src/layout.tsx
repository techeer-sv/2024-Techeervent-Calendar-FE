import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[768px] min-h-screen mx-auto shadow-md">
      {children}
    </div>
  );
};

export default Layout;
