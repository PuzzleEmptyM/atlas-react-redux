import React from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
import DeleteListButton from './DeleteListButton';

const List: React.FC = () => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>To Do</h3>
      <Card title="Lorem ipsum dolor" description="Sed viverra, diam eu facilisis bibendum" />
      <Card title="Lorem ipsum dolor" description="Sed viverra, diam eu facilisis bibendum" />
      <NewCardForm />
    </div>
  );
};

export default List;
