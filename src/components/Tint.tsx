import React from 'react';
import PropTypes from 'prop-types';
import './styles/tint.scss';

type TintProps = {
  color?: string;
  opacity?: number;
  blur?: number;
  borderRadius?: number;
};

const Tint = ({color, opacity, blur, borderRadius}: TintProps) => {
  return (
    <div 
        className='tint' 
        style={{
            backgroundColor: color || 'black', 
            opacity: opacity || 0.5, 
            filter: `blur(${blur || 0}px)`,
            borderRadius: `${borderRadius || 0}px`,
        }}
    />
  );
};

Tint.propTypes = {
    color: PropTypes.string,
    opacity: PropTypes.number,
    blur: PropTypes.number,
    borderRadius: PropTypes.number,
}

export default Tint;
