import React from "react";
import PropTypes from "prop-types";
import TomeCard from "./TomeCard";
import "./styles/css/tome-cards.css";

type Figure = {
  id: number;
  name: string;
  title: string;
  link: string;
};

type TomeCardsProps = {
  figures: Array<Figure>;
};

const TomeCards = ({ figures }: TomeCardsProps) => {
  return (
    <div className="tome-cards">
        {figures.map((figure, i) => {
          return (
            <TomeCard key={ i } figureName={figure.name} figureTitle={figure.title} figureLink={figure.link}/>
          );
        })}
    </div>
  );
};

TomeCards.propTypes = {
  figures: PropTypes.array.isRequired,
};

export default TomeCards;
