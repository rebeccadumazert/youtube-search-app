import React from 'react';

function SearchBar({ onChangeSearch, search }) {
  return (
    <div>
      <input onChange={onChangeSearch} keyCode={e => console.log(e)} type="search" />
      <button onClick={search}>Let's Search !</button>
    </div>
  );
}

export default SearchBar;
