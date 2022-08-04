import React from "react";
import "./styles/css/wallpaper.css";

export const Wallpaper = () => {
  return (
    <div className="wallpaper">
        <img src={require('../assets/images/wallpaper.jpg')} alt='' />
    </div>
  );
};

export default Wallpaper;
