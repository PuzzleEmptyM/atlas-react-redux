import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import DeleteCardButton from './DeleteCardButton';
import dragIcon from '../assets/drag.png';  // Your drag icon asset

interface CardProps {
  cardId: string;
  listId: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = React.memo(({ cardId, listId, title, description }) => {
  const [isDraggingAllowed, setIsDraggingAllowed] = useState(false);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: cardId,
    data: { listId },
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDraggingAllowed(false);
    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const distanceX = Math.abs(moveEvent.clientX - startX);
      const distanceY = Math.abs(moveEvent.clientY - startY);
      if (distanceX > 2 || distanceY > 2) {
        setIsDraggingAllowed(true);
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mouseup', handleMouseUp);
  };

  const style = {
    transform: isDragging && isDraggingAllowed ? `translate3d(${transform?.x}px, ${transform?.y}px, 0)` : '',
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="card group/card m-3 flex flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue max-w-[425px] w-full"
    >
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black relative">
        <span className="truncate max-w-[350px]">{title}</span>
        <DeleteCardButton cardId={cardId} listId={listId} />
      </h5>
      <div className="relative w-full overflow-auto max-h-48">
        <p className="mt-0 text-left">{description}</p>
      </div>

      {/* Drag handle icon */}
      <div
        ref={setNodeRef}
        style={style}
        {...(isDraggingAllowed ? listeners : {})}
        {...attributes}
        className="flex justify-center items-center mt-2 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <img src={dragIcon} alt="Drag" className="h-6 w-6" />
      </div>
    </div>
  );
});

export default Card;
