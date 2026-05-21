import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';


const Searchbar = ({ getWeather, getForecast }) => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
    setIsSearching(false);
    getWeather(search);
    getForecast(search);
    setSearch("");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-2xl">
        <form onSubmit={formHandle} className="relative flex items-center">
          <input
            type="text"
            placeholder="Search for a city..."
            className="w-full text-lg md:text-xl px-6 py-3 bg-slate-800/90 text-white rounded-full border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={handleChange}
          />
          <button 
            type="submit"
            className="absolute right-2 p-2 bg-slate-900 rounded-full text-white hover:bg-blue-600"
          >
            <Search size={20} />
          </button>
        </form>

        {isSearching && (
          <div className="absolute top-full mt-2 w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-white shadow-xl z-50">
            <p className="px-4 py-2 text-slate-400 text-sm">
              Searching for "{search}"...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;