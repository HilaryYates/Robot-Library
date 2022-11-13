import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <h1 className='title'>Search for the name of the Robot.</h1>
      <div className='search-box-container'>
        <input
          className='pa3 ba'
          type='search'
          placeholder='search robots'
          onChange={searchChange}
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
