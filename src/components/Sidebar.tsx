"use client";

import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-lg md:hidden"
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static top-0 left-0 h-full w-64 bg-gray-900 p-6 flex flex-col transition-transform duration-300 ease-in-out md:transition-none border-r border-gray-700 z-40`}>
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Sidebar</h2>
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-gray-800 text-white p-4 mb-3 rounded-lg transition duration-300 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </>
  );
};

export default Sidebar;