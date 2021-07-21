import React, { ReactNode } from "react";
import "./Card.css";

type Props = {
  className?: string;
  children: ReactNode;
};

const Card = ({ className, children, ...rest }: Props) => {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
