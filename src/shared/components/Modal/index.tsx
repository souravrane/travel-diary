import { ReactNodeLike } from "prop-types";
import React, { SetStateAction } from "react";
import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop";
import "./Modal.css";

type OverlayProps = {
  className?: string;
  headerClass?: string;
  header?: string;
  onSubmit?: () => void;
  contentClass?: string;
  children?: ReactNode;
  footerClass?: string;
  footer?: ReactNode;
};

type ModalProps = {
  onCancel: () => void;
  show: boolean;
};

const ModalOverlay = ({
  className,
  header,
  headerClass,
  onSubmit,
  contentClass,
  children,
  footerClass,
  footer,
  ...rest
}: OverlayProps) => {
  return (
    <div className={`modal ${className}`} {...rest}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
};

const Modal = ({ onCancel, show, ...rest }: ModalProps & OverlayProps) => {
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...rest} />
      </CSSTransition>
    </>
  );
};

export default Modal;
