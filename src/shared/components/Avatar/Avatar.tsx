import React from "react";
import "./Avatar.css";

type Props = {
  className?: string;
  image: string;
  alt: string;
  height?: number;
  width?: number;
};

const Avatar = ({ className, image, alt, width, height, ...rest }: Props) => {
  return (
    <div className={`avatar ${className}`} {...rest}>
      <img src={image} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
};

export default Avatar;
