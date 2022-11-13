import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <h1 className='title'>Search for the name of the Robot.</h1>

      <input
        className='pa3 ba search-box'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
