import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice';
import deleteIcon from '../assets/x-icon.png';

interface DeleteListButtonProps {
  listId: string;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ listId }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="h-[30px] w-[30px] text-red-600 hover:text-red-800"
      onClick={() => dispatch(deleteList(listId))}
    >
      <img src={deleteIcon} alt="Delete" className="h-full w-full" />
    </button>
  );
};

export default DeleteListButton;
