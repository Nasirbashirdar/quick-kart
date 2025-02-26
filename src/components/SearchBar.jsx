import React, { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setSearchQuery } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query); // Update the global searchQuery state
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded-lg w-full"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
