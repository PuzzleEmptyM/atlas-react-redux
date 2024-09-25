import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';  // Import AppDispatch and RootState
import { addCardToList, removeCardFromList } from './listsSlice';  // Import related list actions

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardsState {
  cards: Record<string, Card>;  // Store cards as an object with cardId as the key
}

const initialState: CardsState = {
  cards: {},
};

// Helper to generate a unique ID
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCardSuccess: (
      state,
      action: PayloadAction<{ cardId: string; title: string; description: string }>
    ) => {
      const { cardId, title, description } = action.payload;
      state.cards[cardId] = { id: cardId, title, description };  // Add card to state
    },
    deleteCardSuccess: (state, action: PayloadAction<{ cardId: string }>) => {
      const { cardId } = action.payload;  // Make sure cardId is correctly extracted
      delete state.cards[cardId];  // This deletes the card from the state
    },
    clearBoard: (state) => {
      state.cards = {};  // Clear all cards
    },
  },
});

// Thunk to create a card and add it to the list
export const createCard = (listId: string, title: string, description: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const newCardId = generateUniqueId();
    dispatch(cardsSlice.actions.createCardSuccess({ cardId: newCardId, title, description }));
    dispatch(addCardToList({ listId, cardId: newCardId }));  // Add card to the list
  };
};

export const deleteCard = (cardId: string, listId: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(cardsSlice.actions.deleteCardSuccess({ cardId }));
    dispatch(removeCardFromList({ cardId, listId }));
  };
};

export const { createCardSuccess, deleteCardSuccess, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
