/*ES7 snippet 'rafcp' will generate this component scheme*/
/*dark vectors: https://convertio.co/*/
import React from "react";
import PropTypes from "prop-types";
import SpacedText from "./SpacedText";
import Tint from "./Tint";
import ContrastImage from "./ContrastImage";
import "./styles/fragment-card.scss";

type FragmentCardProps = {
  characterName: string;
  characterTitle: string;
  characterLink?: string;
};

const FragmentCard = ({
  characterName,
  characterTitle,
  characterLink,
}: FragmentCardProps) => {
  function hasImg() {
    try {
      require(`../assets/images/characters/${characterName.toLowerCase()}.svg`);
    } catch (e) {
      return false;
    }

    return true;
  }

  return (
    <a
      href={characterLink}
      target="_blank"
      className="fragment-card"
      rel="noopener noreferrer"
    >
      <Tint color="black" opacity={0.65} borderRadius={10} />
      <ContrastImage
        src={`characters/${(hasImg() ? characterName : 'placeholder')}.svg`.toLowerCase()}
        alt={characterName}
        shape="portrait"
        hoverEffect
      />
      <div className="caption">
        <h3>
          <Tint color="#FBECD6" opacity={0.35} />
          <SpacedText text={characterName} contrast />
        </h3>
        <p>{characterTitle}</p>
      </div>
    </a>
  );
};

FragmentCard.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterTitle: PropTypes.string.isRequired,
  characterLink: PropTypes.string,
};

export default FragmentCard;
