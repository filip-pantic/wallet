import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../UI/logic/CardManager';
import { useNavigate } from 'react-router-dom';
import Header from '../UI/elements/Header';
import CardInputForm from '../UI/elements/CardInputForm';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg';
import '../UI/styles/form-design.css';

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

  const vendorIcons = {
    'bitcoin-inc': BitcoinIcon,
    'block-chain-inc': BlockchainIcon,
    'evil-corp': EvilIcon,
    'ninja-bank': NinjaIcon,
  };

  const handleAddCard = (cardDetails) => {
    dispatch(addCard(cardDetails));
    navigate('/');
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
        <img src={ChipDark} className="card-chip" alt="Chip" />
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
        onVendorChange={handleVendorChange}
      />
    </div>
  );
};

export default CardAddition;
