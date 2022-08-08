import React from 'react';
import './styles/contrast-image.scss';
import PropTypes from 'prop-types';

type ContrastImageProps = {
    src: string,
    alt?: string,
    color?: string,
    contrastColor?: string,
    hoverEffect?: boolean,
}

const ContrastImage = ({ src, alt, color, contrastColor, hoverEffect }: ContrastImageProps) => {
    return (
        <div className={`contrast-image ${hoverEffect ? 'intensify' : ''}`}>
            <img src={require(`../assets/images/${src}.svg`).default} alt={alt} />
            <img src={require(`../assets/images/icon.svg`).default} alt={alt} />
        </div>
    );
}

ContrastImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    color: PropTypes.string,
    contrastColor: PropTypes.string,
    hoverEffect: PropTypes.bool,
}

ContrastImage.defaultProps = {
    alt: '',
    color: 'white',
    contrastColor: 'black',
    hoverEffect: false,
}

export default ContrastImage;
