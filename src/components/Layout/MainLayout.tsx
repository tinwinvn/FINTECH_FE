import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar/NavBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
