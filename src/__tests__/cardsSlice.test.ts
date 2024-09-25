import { describe, it, expect } from 'vitest';
import cardsReducer, { createCardSuccess, deleteCardSuccess, clearBoard } from '../slices/cardsSlice';

describe('cardsSlice', () => {
  it('should create card', () => {
    const initialState = { cards: {} };
    const newCard = { cardId: '101', title: 'Test Card', description: 'Test Description' };

    const nextState = cardsReducer(initialState, createCardSuccess(newCard));
    
    expect(Object.keys(nextState.cards)).toHaveLength(1);
    expect(nextState.cards['101'].title).toBe('Test Card');
  });

  it('should delete card', () => {
    const initialState = { cards: { '101': { id: '101', title: 'Test Card', description: 'Test Description' } } };

    const nextState = cardsReducer(initialState, deleteCardSuccess({ cardId: '101' }));
    
    expect(Object.keys(nextState.cards)).toHaveLength(0);
  });

  it('should clear all cards', () => {
    const initialState = { cards: { '101': { id: '101', title: 'Test Card', description: 'Test Description' } } };

    const nextState = cardsReducer(initialState, clearBoard());
    
    expect(Object.keys(nextState.cards)).toHaveLength(0);
  });
});
