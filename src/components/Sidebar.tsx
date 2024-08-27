import React from 'react';

const Sidebar = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="w-64 bg-gray-900 p-6 flex flex-col h-full border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Sidebar</h2>
      {options.map((option, index) => (
        <button
          key={index}
          className="bg-gray-800 text-white p-3 mb-3 rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {option}
        </button>
      ))}
      <div className="mt-auto">
        <h3 className="text-lg font-semibold mb-3 text-gray-300">Progress</h3>
        <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-blue-500 h-full w-1/2 transition-all duration-500 ease-in-out"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;