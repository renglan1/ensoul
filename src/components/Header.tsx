import React from 'react';
import SpacedText from './SpacedText';
import ContrastImage from './ContrastImage';
import PropTypes from 'prop-types';
import './styles/header.scss';

type HeaderProps = {
  expanded?: boolean;
}

const Header: React.FC<HeaderProps> = function({ expanded }: HeaderProps) {
  return (
    <div className={`header`} >
      <ContrastImage 
        src='logo.svg' 
        alt='soularium logo' 
        height={'200px'} 
        width={'168px'} 
        scale
      />
      <h1 className='title'>
        <SpacedText text='soularium' />
      </h1>
    </div>
  );
};

Header.propTypes = {
  expanded: PropTypes.bool,
}

export default Header;
