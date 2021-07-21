import React, { ReactNode } from "react";
import "./Header.css";

type Props = {
  children: ReactNode;
};
export const Header = ({ children }: Props) => {
  return <header className="main-header">{children}</header>;
};
