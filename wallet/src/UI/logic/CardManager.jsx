// data/cardManager.js
import { createSlice } from '@reduxjs/toolkit';

export const cardManagerSlice = createSlice({
  name: 'cardManager',
  initialState: {
    cards: [],
    activeCardIndex: null,
    isAddingNewCard: false,
  },
  reducers: {
    addCard: (state, action) => {
      // Direct mutation is okay in createSlice due to Immer library
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      const index = state.cards.findIndex(card => card.id === action.payload);
      if (index !== -1) {
        state.cards.splice(index, 1);
      }
      // Side effects like localStorage should be handled in middleware or component lifecycle, not in reducers
    },
    setActiveCard: (state, action) => {
      state.activeCardIndex = action.payload;
    },
    updateCard: (state, action) => {
      const { index, updatedCardData } = action.payload;
      if (index >= 0 && index < state.cards.length) {
        state.cards[index] = updatedCardData;
      }
    },
    setIsAddingNewCard: (state, action) => {
      state.isAddingNewCard = action.payload;
    },
    updateCardOrder: (state, action) => {
      state.cards = action.payload;
    },
  },
});

// Export actions
export const { 
  addCard, 
  removeCard, 
  setActiveCard, 
  updateCard, 
  setIsAddingNewCard, 
  updateCardOrder 
} = cardManagerSlice.actions;

// Export reducer
export default cardManagerSlice.reducer;
