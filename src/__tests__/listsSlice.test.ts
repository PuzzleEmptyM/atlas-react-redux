import { describe, it, expect } from 'vitest';
import listsReducer, { addList, deleteList, addCardToList, clearBoard } from '../slices/listsSlice';

describe('listsSlice', () => {
  it('should add list', () => {
    const initialState = { lists: [] };
    const newList = { title: 'New List' };

    const nextState = listsReducer(initialState, addList(newList));
    
    expect(nextState.lists).toHaveLength(1);
    expect(nextState.lists[0].title).toBe('New List');
  });

  it('should delete list', () => {
    const initialState = { lists: [{ id: '1', title: 'Test List', cardIds: [] }] };

    const nextState = listsReducer(initialState, deleteList('1'));
    
    expect(nextState.lists).toHaveLength(0);
  });

  it('should add card to list', () => {
    const initialState = { lists: [{ id: '1', title: 'Test List', cardIds: [] }] };
    const action = { listId: '1', cardId: '101' };

    const nextState = listsReducer(initialState, addCardToList(action));
    
    expect(nextState.lists[0].cardIds).toContain('101');
  });

  it('should clear the board', () => {
    const initialState = { lists: [{ id: '1', title: 'Test List', cardIds: [] }] };

    const nextState = listsReducer(initialState, clearBoard());
    
    expect(nextState.lists).toHaveLength(0);
  });
});
