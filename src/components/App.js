import React, { useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from '../firebase.js';
import { useStateValue } from '../StateProvider.js';
import Payment from './Payment';


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

            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/payment'>
              <Header />
              <Payment />
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
