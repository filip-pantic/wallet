import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardElement from './CardElement';
import { updateCardOrder } from '../logic/CardManager';

const CardGroup = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardManager.cards);

  const handleCardClick = (index) => {
    if (index !== 0) {
      const selectedCard = cards[index];
      const updatedCards = [...cards];
      updatedCards.splice(index, 1);
      updatedCards.unshift(selectedCard);

      dispatch(updateCardOrder(updatedCards));
    }
  };

  return (
    <div className="card-group">
      {cards.map((cardData, index) => (
        <div
          className="card-wrapper"
          key={cardData.id}
          onClick={() => handleCardClick(index)}
        >
          <CardElement
            cardData={cardData}
            active={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
