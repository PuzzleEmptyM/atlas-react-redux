import React from 'react';
import DeleteCardButton from './DeleteCardButton';

interface CardProps {
  cardId: string;
  title: string;
  description: string;
  listId: string;  // Add listId to props
}

const Card: React.FC<CardProps> = ({ cardId, title, description, listId }) => {
  return (
    <div className="card group/card m-3 flex min-h-24 min-w-[425px] max-w-[425px] w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span className="truncate max-w-[350px]">{title}</span>
        <DeleteCardButton cardId={cardId} listId={listId} />  {/* Pass cardId and listId */}
      </h5>
      <div className="relative w-full overflow-auto max-h-48">
        <p className="mt-0 text-left">{description}</p>
      </div>
    </div>
  );
};

export default Card;
