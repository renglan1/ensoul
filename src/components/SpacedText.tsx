import React from "react";
import "./styles/css/spaced-text.css";

type SpacedTextProps = {
  text: string;
};

const SpacedText = ({text}: SpacedTextProps) => {
  return (
    <div className="spaced-text">
      {text.toUpperCase().split('').map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </div>
  );
};

export default SpacedText;
