import React from 'react';
import Title from './components/Title'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styles from './App.module.css';
import Pryde from './components/Pryde';
import Cusail from './components/Cusail';
import Home from './components/Home';
import Pioneer from './components/Pioneer';
import { Helmet } from "react-helmet";
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
      </Helmet>
      <Title />
      <Nav />
      <MobileNav />
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cusail" component={Cusail} />
          <Route path="/pryde-connect" component={Pryde} />
          <Route path="/pryde-pioneer" component={Pioneer} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
