import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../UI/elements/Header';
import CardGroup from '../UI/elements/CardGroup';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="home">
      <Header title="E-WALLET" />
      <CardGroup />
      <Link to="/addcard" className="add-card-link">Add a New Card</Link>
    </div>
  );
};

export default Dashboard;
