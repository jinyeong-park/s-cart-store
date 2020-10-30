import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>

      <img className='header__logo' src='https://bookable-rooms-images.s3.us-east-2.amazonaws.com/sCart-logo-black.png'/>
      <div className='header__search'>
        <input className='header__searchInput' type='text' placeholder='Search for anything'>
        </input>
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>

        <div className='header__option'>
           <span className='header__optionLineThree'>Cart</span>
        </div>

      </div>

    </div>
  )
}

export default Header
