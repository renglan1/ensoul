import React from 'react';
import PropTypes from 'prop-types';
import './styles/button.scss';

type ButtonProps = {
  label: string,
  primary?: boolean,
  backgroundColor?: string,
  size?: string,
  onClick?: Function,
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, primary, backgroundColor, size, onClick, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{backgroundColor: backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
