import React from "react";
import "./styles/css/header.css";
import SpacedText from "./SpacedText";
import Tint from "./Tint";

export const Header = () => {
  return (
    <div className="header">
      <Tint color="black" opacity={0.6} blur={20}/>
      <img src={require("../assets/images/icon.svg").default} />
      <h1 className="logo">
        <SpacedText text="ensoul" />
      </h1>
    </div>
  );
};

export default Header;
