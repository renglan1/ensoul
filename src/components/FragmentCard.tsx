/*ES7 snippet 'rafcp' will generate this component scheme*/
/*dark vectors: https://convertio.co/*/
import React from "react";
import PropTypes from "prop-types";
import SpacedText from "./SpacedText";
import Tint from "./Tint";
import ContrastImage from "./ContrastImage";
import "components/styles/fragment-card.scss";
import {motion} from "framer-motion";

type FragmentCardProps = {
  fableName: string;
  fableTitle: string;
};

const FragmentCard = ({
  fableName,
  fableTitle,
}: FragmentCardProps) => {
  const [isActive, setIsActive] = React.useState(false);

  function hasImg() {
    try {
      require(`../assets/images/fables/${fableName.toLowerCase()}.svg`);
    } catch (e) {
      return false;
    }

    return true;
  }

  function updateActive(): void{
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <motion.div 
      className={`fragment-card ${isActive ? "active" : ""}`}
      onClick={updateActive}
    >
      <Tint color="black" opacity={0.75} borderRadius={10} />
      <ContrastImage
        src={`fables/${(hasImg() ? fableName : 'placeholder')}.svg`.toLowerCase()}
        alt={fableName}
        shape="portrait"
        hoverEffect
      />
      <div className="caption">
        <h2>
          <Tint color="#FBECD6" opacity={0.35} />
          <SpacedText text={fableName} contrast />
        </h2>
        <p>{fableTitle}</p>
      </div>
    </motion.div>
  );
};

FragmentCard.propTypes = {
  fableName: PropTypes.string.isRequired,
  fableTitle: PropTypes.string.isRequired,
  fableLink: PropTypes.string,
};

export default FragmentCard;
