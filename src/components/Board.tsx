import { useSelector } from 'react-redux';  // Correct import
import { RootState } from '../store';       // Import RootState for typing
import List from './List';

const Board = () => {
  // Access the lists from the Redux store
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="flex justify-left items-start h-[calc(100vh-200px)] w-full overflow-x-auto text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} cardIds={list.cardIds} />
        ))}
      </div>
    </div>
  );
};

export default Board;
