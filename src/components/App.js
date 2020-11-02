import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  console.log('APP')
  return (

    <Router>
      <div className="App">

          {/* use react router */}
          <Switch>
            <Route path="/">
              <Header />
              <Home />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/login">
              <Login />

            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
