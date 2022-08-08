import React from 'react';
import './styles/wallpaper.scss';

const Wallpaper = () => {
  return (
    <div className='wallpaper'>
        <img src={require('../assets/images/wallpaper.jpg')} alt='' />
    </div>
  );
};

export default Wallpaper;
