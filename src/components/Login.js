import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://i.imgur.com/Q3TUC8Z_d.webp?maxwidth=728&fidelity=grand' />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign In</button>
        </form>

        <button className='login__signUpButton'>Create your sCart Account</button>
      </div>

    </div>
  )
}

export default Login
