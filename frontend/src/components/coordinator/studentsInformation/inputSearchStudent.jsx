import React from 'react';

export default function InputSearch({ searchQuery, handleSearchChange }) {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        placeholder="Buscar estudiante"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 rounded-md bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/10"
      />
    </div>
  );
}
