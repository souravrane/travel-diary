import React from "react";
import "./Backdrop.css";

const Backdrop = ({ ...rest }) => {
  return <div className="backdrop" {...rest}></div>;
};

export default Backdrop;
