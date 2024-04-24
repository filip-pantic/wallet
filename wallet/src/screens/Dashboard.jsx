// screens/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../UI/elements/Header'; // Changed Top to Header based on your directory structure
import CardGroup from '../UI/elements/CardGroup'; // Changed CardStack to CardGroup based on your directory structure
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // If you are using the Redux store to hold card data, you would retrieve it here with useSelector.
  // const cards = useSelector((state) => state.cardManager.cards);

  return (
    <div className="home"> {/* You might want to rename this class to "dashboard" */}
      <Header title="E-WALLET" />
      <CardGroup /> {/* This will display a group of cards */}
      <Link to="/addcard" className="add-card-link">Add a New Card</Link> {/* Links to the card addition page */}
    </div>
  );
};

export default Dashboard;
