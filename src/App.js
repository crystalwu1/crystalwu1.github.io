import React from 'react';
import Title from './components/Title'
import Nav from './components/Nav'
import Template from './components/Template';
import Website from './components/Website';
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

function App() {
  return (
    <div>
      <Title />
      <Nav></Nav>
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cusail" component={Cusail} />
          <Route path="/pryde-connect" component={Pryde} />
          <Route path="/pryde-pioneer" component={Pioneer} />
          <Route path="/website" component={Website} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
