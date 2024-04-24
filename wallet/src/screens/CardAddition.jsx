// screens/CardAddition.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../UI/logic/CardManager'; // Corrected import path
import { useNavigate } from 'react-router-dom';
import Header from '../UI/elements/Header';
import CardInputForm from '../UI/elements/CardInputForm';
import CardDisplay from '../UI/elements/CardDisplay';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg'; // Import chip image
import '../UI/styles/form-design.css'; // Ensure this path is correct according to your project structure

const CardAddition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
    vendor: '',
  });

  // Define the vendor icons
  const vendorIcons = {
    'bitcoin-inc': BitcoinIcon,
    'block-chain-inc': BlockchainIcon,
    'evil-corp': EvilIcon,
    'ninja-bank': NinjaIcon,
  };

  const handleAddCard = (cardDetails) => {
    dispatch(addCard(cardDetails)); // Dispatches an action to add a card
    navigate('/'); // Navigate to the home screen after adding a card
  };

  const handleVendorChange = (e) => {
    const selectedVendor = e.target.value;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      vendor: selectedVendor,
    }));
  };

  return (
    <div className="add-card">
      <Header title="ADD A NEW BANK CARD" />
      <div className={`card-preview color-${cardDetails.vendor}`}>
        {/* Render chip image */}
        <img src={ChipDark} className="card-chip" alt="Chip" />
        {/* Render card details */}
        <div className="card-number">{cardDetails.number || 'xxxx xxxx xxxx xxxx'}</div>
        <div className="card-holder-expiry">
          <div className="card-holder-section">
            <span className="card-info-label">CARDHOLDER NAME</span>
            <span className="card-holder">{cardDetails.holder || 'FIRSTNAME LASTNAME'}</span>
          </div>
          <div className="card-expiry-section">
            <span className="card-info-label">VALID THRU</span>
            <span className="card-expiry">{cardDetails.expiry || 'MM/YY'}</span>
          </div>
        </div>
        {/* Render vendor icon */}
        {cardDetails.vendor && vendorIcons[cardDetails.vendor] && (
          <img
            src={vendorIcons[cardDetails.vendor]}
            className="card-vendor-icon"
            alt={`${cardDetails.vendor} Icon`}
          />
        )}
      </div>
      <CardInputForm
        cardDetails={cardDetails}
        setCardDetails={setCardDetails}
        onSubmit={handleAddCard}
        onVendorChange={handleVendorChange} // Pass the handler to the CardInputForm
      />
    </div>
  );
};

export default CardAddition;
