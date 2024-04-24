import { configureStore } from '@reduxjs/toolkit';
import cardManagerReducer from '../UI/logic/CardManager';

const loadState = () => {
  const serializedState = localStorage.getItem('myUniqueAppState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('myUniqueAppState', serializedState);
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cardManager: cardManagerReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    cardManager: store.getState().cardManager,
  });
});

export default store;
