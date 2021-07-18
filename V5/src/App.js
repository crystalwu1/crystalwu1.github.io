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
import About from './components/About';
import Ieee from './components/Ieee';
import Pioneer from './components/Pioneer';

function App() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Nav />
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/cusail" component={Cusail} />
          <Route path="/pryde-connect" component={Pryde} />
          <Route path="/pryde-pioneer" component={Pioneer} />
          <Route path="/ieee" component={Ieee} />
          <Route path="/website" component={Website} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
