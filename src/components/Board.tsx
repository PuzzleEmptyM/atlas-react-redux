import { useSelector, useDispatch } from 'react-redux';  
import { RootState } from '../store';
import List from './List';
import { DndContext, closestCenter } from '@dnd-kit/core'; 
import { moveCardBetweenLists } from '../slices/listsSlice'; 
import React from 'react';

const Board = React.memo(() => {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const dispatch = useDispatch();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const sourceListId = active.data.current.listId;  
    const destinationListId = over.data.current.listId;  

    console.log('Drag End Event Fired:', { activeId: active.id, sourceListId, destinationListId });

    dispatch(moveCardBetweenLists({ sourceListId, destinationListId, cardId: active.id }));
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd} 
    >
      <div className="flex justify-left items-start h-[calc(100vh-200px)] w-full overflow-x-auto text-center">
        <div className="flex h-full space-x-4">
          {lists.map((list) => (
            <List key={list.id} listId={list.id} title={list.title} cardIds={list.cardIds} />
          ))}
        </div>
      </div>
    </DndContext>
  );
});

export default Board;
