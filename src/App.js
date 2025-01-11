import React, { useState } from 'react';
import { ListPlus } from 'lucide-react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex items-center gap-3 mb-8">
          <ListPlus className="w-8 h-8 text-green-400" />
          <h1 className="text-3xl font-bold text-green-400">Item List Manager</h1>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Item List</h2>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter item"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button
                onClick={handleAddItem}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                Add Item
              </button>
            </div>

            <div className="mt-6">
              {items.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No items added yet</p>
              ) : (
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 bg-gray-700 rounded-lg border border-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;