import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Track search state

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, isSearching, setIsSearching }}
    >
      {children}
    </SearchContext.Provider>
  );
};
