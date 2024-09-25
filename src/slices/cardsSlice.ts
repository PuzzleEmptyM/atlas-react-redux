import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    createCard: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const newCardId = generateUniqueId();
      const { title, description } = action.payload;
      state.cards[newCardId] = { id: newCardId, title, description };
    },
    deleteCard: (state, action: PayloadAction<{ cardId: string }>) => {
      delete state.cards[action.payload.cardId];
    },
    clearBoard: (state) => {
      state.cards = {};
    },
  },
});

export const { createCard, deleteCard, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
