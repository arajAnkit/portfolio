import React from "react";
import StarsCanvas from "./_components/star-bg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <StarsCanvas />
    {children}
    </>
  )
};

export default Layout;
