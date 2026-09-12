import React, { use, useState } from 'react';
import type { Icard } from '../../types/card';
import AvailableCards from './AvailableCards';
import YourStack from './YourStack';

interface CardsProps {
  cardPromise: Promise<Icard[]>;
}

const Cards = ({ cardPromise }: CardsProps) => {
  const cards = use(cardPromise);
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  const handleAddToCart = (card: Icard) => {
    const isExist = selectedCards.find((item) => item.id === card.id);
    if (!isExist) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleRemoveItem = (id: number) => {
    setSelectedCards(selectedCards.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedCards([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <AvailableCards cards={cards} onAddToCart={handleAddToCart} />
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