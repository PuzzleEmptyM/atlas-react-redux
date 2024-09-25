import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';  
import { addCardToList, removeCardFromList } from './listsSlice'; 

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardsState {
  cards: Record<string, Card>; 
}

const initialState: CardsState = {
  cards: {},
};

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
      state.cards[cardId] = { id: cardId, title, description }; 
    },
    deleteCardSuccess: (state, action: PayloadAction<{ cardId: string }>) => {
      const { cardId } = action.payload; 
      delete state.cards[cardId];  
    },
    clearBoard: (state) => {
      state.cards = {};
    },
  },
});

export const createCard = (listId: string, title: string, description: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const newCardId = generateUniqueId();
    dispatch(cardsSlice.actions.createCardSuccess({ cardId: newCardId, title, description }));
    dispatch(addCardToList({ listId, cardId: newCardId }));
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
