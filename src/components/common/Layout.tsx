import React from "react";
import { SideNav } from "../organisms/SideNav";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideNav />
      <div>
        {children}
      </div>
    </div>
  );
}