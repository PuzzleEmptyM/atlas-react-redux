import DeleteListButton from './DeleteListButton';
import { useSelector } from 'react-redux'; // We need useSelector to fetch from the state
import { RootState } from '../store'; // RootState is necessary for type-safety
import Card from './Card';
import NewCardForm from './NewCardForm';

interface ListProps {
  listId: string;
  title: string;
  cardIds: string[];
}

const List = ({ listId, title, cardIds }: ListProps) => {
  // Use the selector to grab all cards from the Redux state
  const allCards = useSelector((state: RootState) => {
    console.log('State from Redux:', state.lists.cards);  // Logs the current state
    return state.lists.cards;
  });
  
  return (
    <div className="group/list h-auto min-w-[425px] p-4 rounded-md">
      <DeleteListButton listId={listId} />
      <h3>{title}</h3>
      {cardIds.map((cardId) => {
        const card = allCards[cardId];  // Fetch each card from the state by its id
        if (card) {
          return (
            <Card
              key={card.id}
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
