import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './slices/listsSlice';
import cardsReducer from './slices/cardsSlice';

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    cards: cardsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
