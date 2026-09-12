import React from 'react';
import type { Icard } from '../../types/card';

interface AvailableCardsProps {
  cards: Icard[];
  selectedCards: Icard[]; 
  onAddToCart: (card: Icard) => void;
}

const AvailableCards: React.FC<AvailableCardsProps> = ({ cards, selectedCards, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards?.map((card) => {
        // have present cart selectedCards in selected array?
        const isAdded = selectedCards.some((item) => item.id === card.id);

        return (
          <div
            key={card.id}
            /* isAdded true border (purple-500) and light glow effect */
            className={`bg-white rounded-2xl p-6 border transition-all duration-300 shadow-sm flex flex-col justify-between ${
              isAdded
                ? 'border-purple-500 ring-2 ring-emerald-500/20 shadow-md'
                : 'border-slate-100 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <img src={card.logo} alt={card.name} className="w-10 h-10 object-contain" />
                {card.badge && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {card.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{card.name}</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">{card.description}</p>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-4">
                <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">{card.category}</span>
                <span>{card.level}</span>
                <span className="text-amber-500 font-semibold">★ {card.rating}</span>
              </div>

              {/* isAdded is true button color purple-500*/}
              <button
                disabled={isAdded}
                onClick={() => onAddToCart(card)}
                className={`w-full py-2.5 font-medium text-sm rounded-xl transition duration-200 ${
                  isAdded
                    ? 'bg-purple-500 text-white cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {isAdded ? 'Added to Stack ✓' : 'Add to Stack'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableCards;