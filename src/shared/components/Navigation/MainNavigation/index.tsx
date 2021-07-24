import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { NavLinks } from "../NavLinks";
import { SideDrawer } from "../SideDrawer";
import Backdrop from "../../Backdrop";
import "./MainNavigation.css";

export const MainNavigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <Header>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
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
