import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='login'>
      <Link to='/'>

        <img className='login__logo' src='https://i.imgur.com/Q3TUC8Z_d.webp?maxwidth=728&fidelity=grand' />
      </Link>
    </div>
  )
}

export default Login
