import React, { use, useState } from 'react';
import toast from 'react-hot-toast';
import type { Icard } from '../../types/card';
import AvailableCards from './AvailableCards';
import YourStack from './YourStack';

interface CardsProps {
  cardPromise: Promise<Icard[]>;
}

const Cards = ({ cardPromise }: CardsProps) => {
  const cards = use(cardPromise);
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  // Add cart handeler with toast
  const handleAddToCart = (card: Icard) => {
    const isExist = selectedCards.find((item) => item.id === card.id);
    if (!isExist) {
      setSelectedCards([...selectedCards, card]);
      toast.success(`${card.name} added to your stack!`); // <--- Success Toast
    } else {
      toast.error(`${card.name} is already in your stack!`); // <--- Warning/Error Toast
    }
  };

  // Remove cart with toast
  const handleRemoveItem = (id: number) => {
    const itemToRemove = selectedCards.find((item) => item.id === id);
    setSelectedCards(selectedCards.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.error(`${itemToRemove.name} removed!`); // <--- Remove Toast
    }
  };

  // All cart remove with toast
  const handleRemoveAll = () => {
    setSelectedCards([]);
    toast.error('All technologies removed from your stack!'); // <--- Clear All Toast
  };

  return (
    <div className="container mx-auto mb-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <AvailableCards 
          cards={cards} 
          onAddToCart={handleAddToCart} 
          selectedCards={selectedCards}
          />
        </div>
        <div className="lg:col-span-1">
          <YourStack
            selectedCards={selectedCards}
            onRemoveItem={handleRemoveItem}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;