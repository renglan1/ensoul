import React from 'react';
import PropTypes from 'prop-types';
import FableCard from './FableCard';
import './styles/fable-cards.scss';

export type fable = {
  id: number;
  name: string;
  title: string;
};

type FableCardsProps = {
  fables?: Array<fable>;
};

const FableCards: React.FC<FableCardsProps> = function({ fables }: FableCardsProps){
  return (
    <div className='fable-cards'>
        {fables ? fables.map((fable, i) => {
          return (
            <FableCard 
              key={ i } 
              fableName={fable.name} 
              fableTitle={fable.title} 
            />
          );
        }) : undefined}
    </div>
  );
};

FableCards.propTypes = {
  fables: PropTypes.array.isRequired,
};

export default FableCards;
