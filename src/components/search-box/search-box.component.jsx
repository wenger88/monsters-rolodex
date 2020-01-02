import React from 'react';
import './search-box.styles.css';

const SearchBoxComponent = ({ placeholder, handleChange }) => (
  <input className='search' type="search" placeholder={placeholder} onChange={handleChange} />
);

export default SearchBoxComponent;
