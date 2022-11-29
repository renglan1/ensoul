import React from "react";
import PropTypes from "prop-types";

import "./styles/contrast-image.scss";

type shape = "portrait" | "landscape" | "square";

type ContrastImageProps = {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
  scale?: boolean;
  shape?: shape;
  hoverEffect?: boolean;
};

const ContrastImage: React.FC<ContrastImageProps> = function({
  src,
  alt,
  height,
  width,
  scale,
  shape,
  hoverEffect,
}: ContrastImageProps) {
  const dimensions: {height: string, width: string, paddingTop?: number} = {
    height: height || 'auto',
    width: width || 'auto',
  }

  if(height){
    dimensions.paddingTop = 0;
  }

  return (
    <div
      className={`
        contrast-image ${shape ? shape : ""} 
        ${hoverEffect ? "intensify" : ""}
        ${scale ? "scale" : ""}
      `}
      style={{ 
        '--baseHeight': height, 
        '--baseWidth': width
      } as React.CSSProperties}
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
