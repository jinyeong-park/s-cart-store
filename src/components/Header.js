import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase.js';

function Header() {

  // const [state, dispatch] = useStateValue();
  const [{ cart, user }, dispatch] = useStateValue();
  const usernameFromEmail = user ? user.email.split('@').[0] : 'Guest'

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>

     {/*  when clicking logo -> go to main homepage */}
     <Link to='/'>
      <img className='header__logo' src='https://i.imgur.com/B0eaVD2.png'/>
     </Link>

    <div className='header__search'>
      <input className='header__searchInput' type='text' placeholder='Search..' />
      <SearchIcon className='header__searchIcon'/>
    </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello {usernameFromEmail}</span>
            <span className='header__optionLineTwo' onClick={handleAuthentication}>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/checkout'>
          <div className='header__optionCart'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo header__basketCount'>{cart.length}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header
