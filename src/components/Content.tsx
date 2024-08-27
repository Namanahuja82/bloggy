"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Feature {
  name: string;
  link: string;
}

const Content = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Feature[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    { name: 'DS,ML,AI', link: 'https://draft.dev/learn/best-data-science-machine-learning-and-ai-blogs' },
    { name: 'DevOps', link: 'https://draft.dev/learn/devops-blogs' },
    { name: 'SaaS marketing', link: 'https://draft.dev/learn/saas-bloggers' },
    { name: 'Technical Writing', link: 'https://draft.dev/learn/the-best-technical-writing-blogs' },
    { name: 'JavaScript', link: 'https://draft.dev/learn/javascript-blogs' },
    { name: 'Product Management', link: 'https://draft.dev/learn/best-product-management-blogs' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feature = features.find(f => f.name.toLowerCase() === searchTerm.toLowerCase());
    if (feature) {
      router.push(feature.link);
      setSearchTerm('');
      setSuggestions([]);
    } else {
      alert('Feature not found');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = features.filter(feature =>
        feature.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      router.push(suggestions[selectedIndex].link);
      setSearchTerm('');
      setSuggestions([]);
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 flex flex-col bg-gray-900">
      <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 relative" ref={searchRef}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search features..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </form>
          {suggestions.length > 0 && (
            <ul className="absolute w-full bg-gray-800 rounded-lg mt-1 shadow-lg border border-gray-700 z-10">
              {suggestions.map((feature, index) => (
                <li
                  key={index}
                  className={`p-3 hover:bg-gray-700 cursor-pointer transition duration-300 ${
                    index === selectedIndex ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => {
                    router.push(feature.link);
                    setSearchTerm('');
                    setSuggestions([]);
                  }}
                >
                  {feature.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select className="w-full sm:w-auto p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          <option>Categories dropdown list</option>
          <option>Dropdown 1</option>
          <option>Dropdown 2</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col justify-between transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl border border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">{feature.name}</h3>
            <Link href={feature.link} className="bg-blue-600 p-2 sm:p-3 rounded-lg mt-4 text-center text-white font-medium hover:bg-blue-700 transition duration-300">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
