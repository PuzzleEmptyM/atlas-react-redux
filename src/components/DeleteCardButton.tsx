import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../slices/cardsSlice';
import trashIcon from '../assets/trash.png';
import { AppDispatch } from '../store';

interface DeleteCardButtonProps {
  cardId: string;
  listId: string;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ cardId, listId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteCard(cardId, listId));
  };

  return (
    <button
      className="hidden group-hover/card:block h-[30px] w-[30px]"
      onClick={handleDelete}
    >
      <img src={trashIcon} alt="Delete" className="h-full w-full" />
    </button>
  );
};

export default DeleteCardButton;
