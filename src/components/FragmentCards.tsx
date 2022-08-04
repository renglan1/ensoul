import React from "react";
import PropTypes from "prop-types";
import FragmentCard from "./FragmentCard";
import "./styles/css/fragment-cards.css";

type Figure = {
  id: number;
  name: string;
  title: string;
  link: string;
};

type FragmentCardsProps = {
  figures?: Array<Figure>;
};

const FragmentCards = ({ figures }: FragmentCardsProps) => {
  return (
    <div className="fragment-cards">
        {figures ? figures.map((figure, i) => {
          return (
            <FragmentCard key={ i } figureName={figure.name} figureTitle={figure.title} figureLink={figure.link}/>
          );
        }) : <></>}
    </div>
  );
};

FragmentCards.propTypes = {
  figures: PropTypes.array.isRequired,
};

export default FragmentCards;
