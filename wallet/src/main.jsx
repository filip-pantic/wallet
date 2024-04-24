import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './data/centralStore';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
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
