import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../slices/cardsSlice';  // Import the thunk action

interface NewCardFormProps {
  listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent page refresh
    if (title && description) {
      // Dispatch the thunk to create the card and add it to the list
      dispatch(createCard(listId, title, description));
      setTitle('');  // Reset the title field
      setDescription('');  // Reset the description field
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 min-w-[425px] max-w-[425px] justify-center">
      <form
        onSubmit={handleSubmit}  // Handle form submission
        className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          type="text"
          placeholder="Title"
          name="title"
          value={title}  // Bind input value to state
          onChange={(e) => setTitle(e.target.value)}  // Update state on change
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
          value={description}  // Bind textarea value to state
          onChange={(e) => setDescription(e.target.value)}  // Update state on change
        ></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full p-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCardForm;
