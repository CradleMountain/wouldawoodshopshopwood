import React, { useState, useEffect } from 'react';

const SearchBar = ({filter, setFilter}) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword.length >= 3) {
      setFilter(keyword);
    } else {
      setFilter(null);
    }
  }, [keyword]);

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <div className="rr-searchbar">
      <input type="search" value={keyword} onChange={handleChange} placeholder="Search by keyword"/>
    </div>
  );
};

export default SearchBar;