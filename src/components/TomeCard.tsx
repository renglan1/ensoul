/*ES7 snippet 'rafcp' will generate this component scheme*/
/*dark vectors: https://convertio.co/*/
import React from "react";
import PropTypes from "prop-types";
import SpacedText from "./SpacedText";
import Tint from "./Tint";
import "./styles/css/tome-card.css";

type TomeCardProps = {
  figureName: string;
  figureTitle: string;
  figureLink: string;
};

const TomeCard = ({ figureName, figureTitle, figureLink }: TomeCardProps) => {
  function hasImg() {
    try {
      require(`../assets/images/figures/${figureName.toLowerCase()}.svg`);
    } catch (e) {
      return false;
    }

    return true;
  }

  return (
    <div
      className="tome-card">
      <Tint color="black" opacity={0.65} borderRadius={10}/>
      <a 
        href={figureLink} 
        target="_blank" 
        className="card"
      >
        <div className="portrait">
          {["glow", ""].map((className, i) => {
            return (
              <img
                key={i}
                src={require(`../assets/images/figures/${(hasImg()
                  ? figureName
                  : "placeholder"
                ).toLowerCase()}.svg`)}
                alt={figureName}
                className={className}
              />
            );
          })}
        </div>
        <div className="caption">
          <h3>
            <SpacedText text={figureName} />
          </h3>
          <p>{figureTitle}</p>
        </div>
      </a>
    </div>
  );
};

TomeCard.propTypes = {
  figureName: PropTypes.string.isRequired,
  figureTitle: PropTypes.string.isRequired,
};

TomeCard.defaultProps = {
  figureName: "direction",
};

export default TomeCard;
