import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface List {
  id: string;
  title: string;
  cardIds: string[];  // Array of card IDs associated with this list
}

interface ListsState {
  lists: List[];  // Store lists as an array
}

const initialState: ListsState = {
  lists: [],
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList = {
        id: Date.now().toString(),  // Generate a unique ID for the list
        title: action.payload.title,
        cardIds: [],  // Initialize an empty array of card IDs
      };
      state.lists.push(newList);  // Add the new list to the state
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);  // Remove list by ID
    },
    addCardToList: (
      state,
      action: PayloadAction<{ listId: string; cardId: string }>
    ) => {
      const list = state.lists.find((list) => list.id === action.payload.listId);  // Find the list
      if (list) {
        list.cardIds.push(action.payload.cardId);  // Add the card ID to the list's cardIds array
      }
    },
    removeCardFromList: (state, action: PayloadAction<{ cardId: string; listId: string }>) => {
      const { cardId, listId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);  // Find the list
      if (list) {
        list.cardIds = list.cardIds.filter((id) => id !== cardId);  // Remove the card ID from the list
      }
    },
    clearBoard: (state) => {
      state.lists = [];  // Clear all lists
    },
  },
});

export const { addList, deleteList, addCardToList, removeCardFromList, clearBoard } =
  listsSlice.actions;
export default listsSlice.reducer;
