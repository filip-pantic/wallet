import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/centralStore';  // Ensure this path is correct according to your project structure
import Dashboard from './screens/Dashboard';  // Renamed from Home to match the file name
import CardAddition from './screens/CardAddition';  // Renamed from AddCard to match the file name
import './App.css';  // Make sure this path is correct

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />  // Updated component name
            <Route path="/addcard" element={<CardAddition />} />  // Updated component name
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
