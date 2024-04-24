// UI/elements/Header.jsx
import React from 'react';
import '../styles/form-design.css'; // Updated path to reflect your directory structure

const Header = ({ title }) => {
  return (
    <header className="header"> {/* Optional: Added a class for more specific styling */}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
