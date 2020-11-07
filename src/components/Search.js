import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider.js';
import '../styles/Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  // get the displayItem from reducer
  const [{ displayItems }, dispatch] = useStateValue();
  const [search, setSearch] = useState('');


  const updateDisplayProducts = () => {
    dispatch({
      type: 'UPDATE_DISPLAY_PRODUCTS',
      searchword: search,
    })
  }

  const showAllItem = () => {
    dispatch({
      type: 'REFRESH_DISPLAY_PRODUCTS',
    })
  }



  return (
    <div className='search'>
      <input className='search__searchInput' type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
      <SearchIcon className='search__searchIcon' onClick={ search === '' ? showAllItem : updateDisplayProducts}/>
    </div>
  )
}

export default Search
