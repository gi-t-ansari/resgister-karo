import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto custom-scrollbar flex flex-col">
      <NavBar />
      <div className="flex-1 ">{children}</div>
    </main>
  );
};

export default Layout;
