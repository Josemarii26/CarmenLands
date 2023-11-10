import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text); // Llama a la función de búsqueda cuando cambia el texto.
  };

  return (
    <input
      type="text"
      placeholder="🔎Buscar productos..."
      value={searchText}
      onChange={handleSearch}
    />
  );
}
