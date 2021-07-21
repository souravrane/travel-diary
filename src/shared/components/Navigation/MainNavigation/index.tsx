import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { NavLinks } from "../NavLinks";
import { SideDrawer } from "../SideDrawer";
import "./MainNavigation.css";

export const MainNavigation = () => {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">Your places</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </>
  );
};
