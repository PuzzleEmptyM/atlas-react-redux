import React from 'react';

const DeleteCardButton: React.FC = () => {
  return (
    <button className="hidden group-hover/card:block" onClick={() => alert('Delete card')}>
      <svg
        className="h-[20px] w-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#00003c"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9L14.39 18m-4.79 0L9.26 9m9.97-3.21c.34.05.68.1 1.02.16M9.75 5.75V4.83C9.75 3.65 8.84 2.67 7.66 2.64C6.88 2.63 5.89 2.67 4.82 2.75C4.81 2.66 4.81 2.58 4.8 2.5"
        />
      </svg>
    </button>
  );
};

export default DeleteCardButton;
