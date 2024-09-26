import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface List {
  id: string;
  title: string;
  cardIds: string[]; 
}

interface ListsState {
  lists: List[]; 
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
        id: Date.now().toString(), 
        title: action.payload.title,
        cardIds: [], 
      };
      state.lists.push(newList);  
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload); 
    },
    addCardToList: (
      state,
      action: PayloadAction<{ listId: string; cardId: string }>
    ) => {
      const list = state.lists.find((list) => list.id === action.payload.listId); 
      if (list) {
        list.cardIds.push(action.payload.cardId); 
      }
    },
    removeCardFromList: (state, action: PayloadAction<{ cardId: string; listId: string }>) => {
      const { cardId, listId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);  
      if (list) {
        list.cardIds = list.cardIds.filter((id) => id !== cardId); 
      }
    },
    moveCardBetweenLists: (
      state,
      action: PayloadAction<{
        sourceListId: string;
        destinationListId: string;
        cardId: string;
      }>
    ) => {
      const { sourceListId, destinationListId, cardId } = action.payload;
      console.log('Reducer Invoked: Moving Card', { cardId, sourceListId, destinationListId });
      
      const sourceList = state.lists.find((list) => list.id === sourceListId);
      const destinationList = state.lists.find(
        (list) => list.id === destinationListId
      );

      if (sourceList && destinationList) {
        sourceList.cardIds = sourceList.cardIds.filter((id) => id !== cardId);
        destinationList.cardIds.push(cardId);
      }
    },
    clearBoard: (state) => {
      state.lists = []; 
    },
  },
});

export const { addList,
  deleteList,
  addCardToList,
  removeCardFromList,
  moveCardBetweenLists,
  clearBoard 
} = listsSlice.actions;
export default listsSlice.reducer;
