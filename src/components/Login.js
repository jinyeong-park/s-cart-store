import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase.js';


function Login() {
  console.log('Login page')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign-In
  const signIn = e => {
    e.preventDefault();

    // firebase login logic
    // https://firebase.google.com/docs/auth/web/start
    // auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(auth => {
    //         history.push('/')
    //         // browserHistory.push('/')
    //     })
    //     .catch(error => alert(error.message)
    //     );
  }

  // Sign-Up
  const signUp = e => {
    e.preventDefault();
    // firebase auth logic
    // auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //       // if it return auth object
    //       console.log('authentification success and auth object:', auth);
    //       if (auth) {
    //         // browserHistory.push('/')
    //         history.push('/')
    //       }
    //     })
    //     .catch(error => alert(error.message)
    // );

  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://i.imgur.com/Q3TUC8Z_d.webp?maxwidth=728&fidelity=grand' />
      </Link>

      <div className='login__container'>
        <h2>Sign-in</h2>

        {/* Form for login */}
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <button typpe='submit' onClick={signUp} className='login__signUpButton'>Create your sCart Account</button>
      </div>

    </div>
  )
}

export default Login
