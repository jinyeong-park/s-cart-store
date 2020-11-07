import React from 'react';
import '../styles/Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <div className='search'>
       <input className='search__searchInput' type='text' placeholder='Search' />
      <SearchIcon className='search__searchIcon'/>

    </div>
  )
}

export default Search
