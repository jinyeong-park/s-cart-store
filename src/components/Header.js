import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className='header'>

      <img className='header__logo' src='https://bookable-rooms-images.s3.us-east-2.amazonaws.com/sCart-logo-black.png'/>
      <div className='header__search'>
        <input className='header__searchInput' type='text' placeholder='Search..' />
        <SearchIcon className='header__searchIcon'/>

      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>


        <div className='header__option'>
           <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='headere__optionCart'>
          <ShoppingCartIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>

      </div>

    </div>
  )
}

export default Header
