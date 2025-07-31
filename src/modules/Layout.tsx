import React from "react";
import {Header, Footer} from "../components/ui";

const Layout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className="m-auto overflow-x-hidden px-4 py-2">
      <div className="sm:w-[80%] w-full m-auto">
        <Header />
      </div>
      <main className={`*:pb-24 ${className}`}>{children}</main>
      <div className="sm:w-[80%] w-full m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
