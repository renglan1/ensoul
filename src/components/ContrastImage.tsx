import React from "react";
import PropTypes from "prop-types";

import "./styles/contrast-image.scss";

type shape = "portrait" | "landscape" | "square";

type ContrastImageProps = {
  src: string;
  alt?: string;
  shape?: shape;
  hoverEffect?: boolean;
};

const ContrastImage = ({
  src,
  alt,
  shape,
  hoverEffect,
}: ContrastImageProps) => {
  return (
    <div
      className={`contrast-image ${shape} ${hoverEffect ? "intensify" : ""}`}
    >
      <img
        src={
          require(`../assets/images/${src}`)
        }
        alt={alt}
        className='glow'
      />
      <img
        src={
            require(`../assets/images/${src}`)
          }
        alt={alt}
      />
    </div>
  );
};

ContrastImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  hoverEffect: PropTypes.bool,
};

ContrastImage.defaultProps = {
  alt: "",
  hoverEffect: false,
};

export default ContrastImage;
