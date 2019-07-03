import React from 'react';
import { Consumer } from '../../context';

const Search = () => {
  return (
    <Consumer>
      {value => {
        const { placeholder, submitHandle, searchText, searchHandle } = value;

        return (
          <div className='search-bar'>
            <form onSubmit={submitHandle}>
              <input
                type='text'
                placeholder={placeholder}
                onChange={searchHandle}
                value={searchText}
              />
              <button>
                <i className='fas fa-search' />
              </button>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
