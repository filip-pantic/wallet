// UI/elements/CardGroup.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardElement from './CardElement'; // Renamed from Card
import { updateCardOrder } from '../logic/CardManager'; // Update the path as per your project structure
import '../styles/theme-modes.css'; // Update the path as per your project structure

const CardGroup = () => {
  const dispatch = useDispatch();
  // Assuming the state structure is the same, but check the correct path and name in your redux setup
  const cards = useSelector((state) => state.cardManager.cards);

  const handleCardClick = (index) => {
    if (index !== 0) { 
      const selectedCard = cards[index];
      const updatedCards = [...cards];
      updatedCards.splice(index, 1); 
      updatedCards.unshift(selectedCard); 

      dispatch(updateCardOrder(updatedCards)); // Assuming you have a corresponding action and reducer
    }
  };

  return (
    <div className="card-group"> {/* Changed class name from card-stack to card-group */}
      {cards.map((cardData, index) => (
        <div
          className="card-wrapper"
          key={cardData.id}
          onClick={() => handleCardClick(index)}
        >
          <CardElement // Renamed from Card
            cardData={cardData}
            active={index === 0} 
          />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
