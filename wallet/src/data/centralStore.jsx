// Filename: data/centralStore.jsx

import { configureStore } from '@reduxjs/toolkit';
import cardManagerReducer from '../UI/logic/CardManager';// Updated import to match your directory

// Utility to load state from localStorage with a unique key
const loadState = () => {
  const serializedState = localStorage.getItem('myUniqueAppState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

// Utility to save state to localStorage with a unique key
const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('myUniqueAppState', serializedState);
};

// Initialize state from localStorage
const persistedState = loadState();

// Configure Redux store with a unique key
const store = configureStore({
  reducer: {
    cardManager: cardManagerReducer, // Renamed 'card' to 'cardManager'
  },
  preloadedState: persistedState,
});

// Subscribe to store changes to save to localStorage
store.subscribe(() => {
  saveState({
    cardManager: store.getState().cardManager, // Make sure to only persist relevant parts of the state
  });
});

export default store;
