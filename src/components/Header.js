import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>

      <img className='header__logo' src='https://bookable-rooms-images.s3.us-east-2.amazonaws.com/sCart-logo-white.png'/>
      <div className='header__search'>
        <input className='header__searchInput' type='text'>
        </input>
      </div>


    </div>
  )
}

export default Header
