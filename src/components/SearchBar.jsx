import React, { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setSearchQuery, setIsSearching } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query); // Update the global searchQuery state
    setIsSearching(true); // Indicate that a search is being performed
  };

  const handleClear = () => {
    setQuery("");
    setSearchQuery("");
    setIsSearching(false); // Reset search state
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
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="ml-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default SearchBar;
