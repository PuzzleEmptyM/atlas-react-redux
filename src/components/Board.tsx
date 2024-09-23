import React from 'react';
import List from './List';

const Board: React.FC = () => {
  return (
    <div className="flex justify-center items-start h-screen w-full overflow-x-auto text-center">
      <div className="flex h-full space-x-4">
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Board;
