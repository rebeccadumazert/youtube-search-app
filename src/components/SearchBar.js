import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onChangeSearch, search }) {
  return (
    <div>
      <input
        onChange={onChangeSearch}
        keyCode={e => console.log(e)}
        type="search"
      />
      <button onClick={search}>Let's Search !</button>
    </div>
  );
}
SearchBar.propTypes = {
  onChangeSearch: PropTypes.string,
  search: PropTypes.func,
};
export default SearchBar;
