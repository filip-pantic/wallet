import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';  // Ensure this path is correct
import store from './data/centralStore';  // Ensure this path is correct
import './index.css';  // Often, this is where base styles are applied, so ensure this file exists

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}
