"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-white"
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <Link href="/" className="text-white text-xl font-bold">
            Bloggy
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 flex flex-col z-50">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Sidebar</h2>
            <Link href="/" className="text-white hover:text-gray-300 mb-4">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300 mb-4">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 mb-4">Contact</Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white mt-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
