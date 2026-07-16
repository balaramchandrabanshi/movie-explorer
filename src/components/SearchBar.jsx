import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  };

  return (
    <div className="flex justify-center items-center gap-2 py-6">
      <input
        type="text"
        placeholder="Enter movie name"
        className="border rounded-lg px-4 py-2 w-80"
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      <button 
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      onClick={() => {onSearch(searchQuery)}}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
