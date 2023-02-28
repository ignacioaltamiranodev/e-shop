import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === '') return;

    push(`/search/${searchTerm.toLocaleLowerCase()}`);
    setSearchTerm('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" hidden></button>
    </form>
  );
};

export default SearchInput;
