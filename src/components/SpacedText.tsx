import React from 'react';
import './styles/spaced-text.scss';
import PropTypes from 'prop-types';

type SpacedTextProps = {
  text: string;
  contrast?: boolean;
};

const SpacedText = ({text, contrast}: SpacedTextProps) => {
  return (
    <div className={`spaced-text ${contrast ? 'contrast' : ''}`}>
      {text.toUpperCase().split('').map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </div>
  );
};

SpacedText.propTypes = {
  text: PropTypes.string.isRequired,
  contrast: PropTypes.bool,
}

export default SpacedText;
