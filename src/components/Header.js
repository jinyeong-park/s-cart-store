import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'

function Header() {
  // const [state, dispatch] = useStateValue();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='header'>

     {/*  when clicking logo -> go to main homepage */}
     <Link to='/'>
      <img className='header__logo' src='https://i.imgur.com/Q3TUC8Z_d.webp?maxwidth=728&fidelity=grand'/>
     </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' placeholder='Search..' />
        <SearchIcon className='header__searchIcon'/>

      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>


        <div className='header__option'>
           <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <Link to='/checkout'>
          <div className='headere__optionCart'>
            <ShoppingCartIcon />
  <span className='header__optionLineTwo header__basketCount'>{cart.length}</span>
          </div>

        </Link>

      </div>

    </div>
  )
}

export default Header
