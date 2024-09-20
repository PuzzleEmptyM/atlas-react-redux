import React from 'react';

const DeleteListButton: React.FC = () => {
  return (
    <button className="h-[30px]" onClick={() => alert('Delete list')}>
      <svg
        className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 6.477 16.523 2 11 2C5.477 2 1 6.477 1 12C1 17.523 5.477 22 11 22C16.523 22 21 17.523 21 12Z"
        />
      </svg>
    </button>
  );
};

export default DeleteListButton;
