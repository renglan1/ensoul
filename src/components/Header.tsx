import React from 'react';
import './styles/css/header.css';
import SpacedText from './SpacedText';

type HeaderProps = {
  condensed: boolean;
}

export const Header = ({ condensed }: HeaderProps) => {
  return (
    <div className='header'>
      <img src={require('../assets/images/icon.svg').default} alt='' />
      <h1 className='title'>
        <SpacedText text='soularium' />
      </h1>
    </div>
  );
};

export default Header;
