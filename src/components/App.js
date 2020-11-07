import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from '../firebase.js';
import { useStateValue } from '../StateProvider.js';
import Payment from './Payment';
import Orders from './Orders';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// stipe publishable key
const stripePromise = loadStripe(
  'pk_test_51HjZ6hCMZ8B0kysvPMgSDPsWtDmi5cNcufylauBZKh8wyTRaBoDv6WoeI2gfnqyzY8UTPOcv874qX15SNEokPLqS00bpVJCOrd')


function App() {
  const [{}, dispatch] = useStateValue();

  // componentDidMount
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (

    <Router>
      <div className="App">

          {/* use react router */}
          <Switch>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>

            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>

            <Route path='/payment'>
              <Header />
              <Elements stripe={stripePromise}>
               <Payment />
              </Elements>
            </Route>

           {/* default */}
            <Route path='/'>
              <Header />
              <Home />
            </Route>

          </Switch>
      </div>
    </Router>

  );
}

export default App;
