import React, { ReactNode } from "react";
import "./SideDrawer.css";

type Props = {
  children: ReactNode;
};

export const SideDrawer = ({ children }: Props) => {
  return <aside className="side-drawer">{children}</aside>;
};
