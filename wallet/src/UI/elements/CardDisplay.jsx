// UI/elements/CardDisplay.jsx
import React from 'react';
import BitcoinIcon from '../../assets/vendor-bitcoin.svg'; // Updated path
import BlockchainIcon from '../../assets/vendor-blockchain.svg'; // Updated path
import EvilIcon from '../../assets/vendor-evil.svg'; // Updated path
import NinjaIcon from '../../assets/vendor-ninja.svg'; // Updated path
import ChipDark from '../../assets/chip-dark.svg'; // Updated path
import ChipLight from '../../assets/chip-light.svg'; // Updated path
import '../styles/form-design.css'; // Updated path

const CardDisplay = ({ cardDetails }) => {
  const getVendorIcon = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return BitcoinIcon;
      case 'block-chain-inc':
        return BlockchainIcon;
      case 'evil-corp':
        return EvilIcon;
      case 'ninja-bank':
        return NinjaIcon;
      default:
        return null;
    }
  };

  const getVendorChip = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return ChipDark;
      case 'block-chain-inc':
      case 'evil-corp':
      case 'ninja-bank':
        return ChipLight;
      default:
        return null;
    }
  };

  const getCardColorClass = (vendor) => {
    if (!vendor) return '';
    return `color-${vendor}`;
  };

  const chipImageSrc = getVendorChip(cardDetails.vendor);
  const vendorIconSrc = getVendorIcon(cardDetails.vendor);
  const cardColorClass = getCardColorClass(cardDetails.vendor);

  return (
    <div className={`card-display ${cardColorClass}`}> {/* Changed the class name to card-display */}
      {chipImageSrc && <img src={chipImageSrc} className="card-chip" alt="Chip" />}
      {vendorIconSrc && <img src={vendorIconSrc} className="card-vendor-icon" alt="Vendor Icon" />}
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
    </div>
  );
};

export default CardDisplay;
