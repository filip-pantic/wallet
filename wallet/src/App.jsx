import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/centralStore';
import Dashboard from './screens/Dashboard';
import CardAddition from './screens/CardAddition';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/addcard" element={<CardAddition />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
