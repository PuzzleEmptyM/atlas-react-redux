import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../slices/cardsSlice';  // Import the thunk
import trashIcon from '../assets/trash.png';
import { AppDispatch } from '../store';

interface DeleteCardButtonProps {
  cardId: string;
  listId: string;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ cardId, listId }) => {
  const dispatch = useDispatch<AppDispatch>();  // Ensure dispatch is typed correctly

  const handleDelete = () => {
    dispatch(deleteCard(cardId, listId));  // Dispatch the thunk
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
