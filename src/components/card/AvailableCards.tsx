import React from 'react';
import type { Icard } from '../../types/card';

interface AvailableCardsProps {
  cards: Icard[];
  onAddToCart: (card: Icard) => void;
}

const AvailableCards: React.FC<AvailableCardsProps> = ({ cards, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards?.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
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

            <button
              onClick={() => onAddToCart(card)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition"
            >
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableCards;