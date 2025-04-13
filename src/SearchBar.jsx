import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      id='search-box'
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
