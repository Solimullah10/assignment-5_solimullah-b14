import React from 'react';
import type { Icard } from '../../types/card';

interface YourStackProps {
  selectedCards: Icard[];
  onRemoveItem: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack: React.FC<YourStackProps> = ({ selectedCards, onRemoveItem, onRemoveAll }) => {
  return (
    <div className="w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900">Your Stack</h3>
        <p className="text-slate-400 font-medium text-sm mt-1">
          {selectedCards.length} {selectedCards.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      <div className="space-y-3">
        {selectedCards.length === 0 ? (
          <p className="text-slate-400 text-sm text-center py-4">No technology added yet.</p>
        ) : (
          selectedCards.map(({ id, name, category, logo }) => (
            <div key={id} className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <img src={logo} alt={name} className="w-8 h-8 object-contain" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">{name}</h4>
                  <p className="text-[11px] text-slate-400">{category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemoveItem(id)}
                className="text-slate-400 hover:text-slate-600 text-lg px-2"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {selectedCards.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-3 border border-red-300 hover:bg-red-50 text-red-500 font-semibold text-sm rounded-xl transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;