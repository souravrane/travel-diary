import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

type Props = {
  children: ReactNode;
  show: boolean;
  onClick: () => void;
};

export const SideDrawer = ({ children, show, onClick }: Props) => {
  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );
};

// export const SideDrawer = ({ children }: Props) => {
//   const content = <aside className="side-drawer">{children}</aside>;
//   return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
// };
