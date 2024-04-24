import React from 'react';
import BitcoinIcon from '../../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../../assets/vendor-blockchain.svg';
import EvilIcon from '../../assets/vendor-evil.svg';
import NinjaIcon from '../../assets/vendor-ninja.svg';
import ChipDark from '../../assets/chip-dark.svg';
import ChipLight from '../../assets/chip-light.svg';
import '../styles/form-design.css';

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
    <div className={`card-display ${cardColorClass}`}>
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
