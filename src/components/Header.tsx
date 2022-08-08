import React from 'react';
import SpacedText from './SpacedText';
import PropTypes from 'prop-types';
import './styles/header.scss';

type HeaderProps = {
  expanded: boolean;
}

const Header = ({ expanded }: HeaderProps) => {
  return (
    <div className={`header`} >
      <img src={require('../assets/images/icon.svg').default} alt='' />
      <h1 className='title'>
        <SpacedText text='soularium' />
      </h1>
    </div>
  );
};

Header.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

export default Header;
