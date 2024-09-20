import React from 'react';
import List from './List';

const Board: React.FC = () => {
  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Board;
