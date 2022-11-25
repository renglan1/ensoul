import React from 'react';
import PropTypes from 'prop-types';
import FragmentCard from './FragmentCard';
import './styles/fragment-cards.scss';

export type fable = {
  id: number;
  name: string;
  title: string;
};

type FragmentCardsProps = {
  fables?: Array<fable>;
};

const FragmentCards: React.FC<FragmentCardsProps> = function({ fables }: FragmentCardsProps){
  return (
    <div className='fragment-cards'>
        {fables ? fables.map((fable, i) => {
          return (
            <FragmentCard 
              key={ i } 
              fableName={fable.name} 
              fableTitle={fable.title} 
            />
          );
        }) : undefined}
    </div>
  );
};

FragmentCards.propTypes = {
  fables: PropTypes.array.isRequired,
};

export default FragmentCards;
