import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../logic/CardManager';
import '../styles/form-design.css';

const CardInputForm = ({ cardDetails, setCardDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(cardDetails));
    navigate('/');
  };

  return (
    <div className="card-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="holder"
          placeholder="Card Holder"
          value={cardDetails.holder}
          onChange={handleChange}
        />
        <div className="input-pair">
          <input
            type="text"
            name="expiry"
            placeholder="Valid Thru"
            value={cardDetails.expiry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
          />
        </div>
        <select
          name="vendor"
          value={cardDetails.vendor}
          onChange={handleChange}
          required
        >
          <option value="">Select vendor...</option>
          <option value="bitcoin-inc">BITCOIN INC</option>
          <option value="ninja-bank">NINJA BANK</option>
          <option value="block-chain-inc">BLOCK CHAIN INC</option>
          <option value="evil-corp">EVIL CORP</option>
        </select>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CardInputForm;
