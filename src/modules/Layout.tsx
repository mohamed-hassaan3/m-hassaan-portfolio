import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto sm:px-4 px-2 py-2">
      <div className="sm:w-[80%] w-full m-auto">
        <Header />
      </div>
      {children}
      <div className="sm:w-[80%] w-full m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
