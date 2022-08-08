import React from 'react';
import PropTypes from 'prop-types';
import FragmentCard from './FragmentCard';
import './styles/fragment-cards.scss';

type character = {
  id: number;
  name: string;
  title: string;
  link: string;
};

type FragmentCardsProps = {
  characters?: Array<character>;
};

const FragmentCards = ({ characters }: FragmentCardsProps) => {
  return (
    <div className='fragment-cards'>
        {characters ? characters.map((character, i) => {
          return (
            <FragmentCard key={ i } characterName={character.name} characterTitle={character.title} characterLink={character.link}/>
          );
        }) : <></>}
    </div>
  );
};

FragmentCards.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default FragmentCards;
