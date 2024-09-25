import { useDroppable } from '@dnd-kit/core'; 
import DeleteListButton from './DeleteListButton';
import { useSelector } from 'react-redux'; 
import { RootState } from '../store'; 
import Card from './Card';
import NewCardForm from './NewCardForm';

interface ListProps {
  listId: string;
  title: string;
  cardIds: string[];
}

const List = ({ listId, title, cardIds }: ListProps) => {
  const allCards = useSelector((state: RootState) => state.cards.cards);


  const { isOver, setNodeRef } = useDroppable({
    id: listId,  
    data: { listId },
  });

  const style = {
    backgroundColor: isOver ? 'lightgray' : 'transparent',  
  };

  return (
    <div
      ref={setNodeRef}  
      style={style}  
      className="group/list h-auto min-w-[425px] p-4 rounded-md"
    >
      <DeleteListButton listId={listId} />
      <h3>{title}</h3>
      {cardIds.map((cardId) => {
        const card = allCards[cardId];  
        if (card) {
          return (
            <Card
              key={card.id}
              cardId={card.id}
              listId={listId}  
              title={card.title}
              description={card.description}
            />
          );
        }
        return null;
      })}
      <NewCardForm listId={listId} />
    </div>
  );
};

export default List;
