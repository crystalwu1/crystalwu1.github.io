import React from 'react';
import Homepage from './pages/Homepage'
import About from './pages/About'
import Cusail from './pages/Cusail'
import Pryde from './pages/Pryde'
import Website from './pages/Website'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/cusail" component={Cusail} />
          <Route path="/prydeconnect" component={Pryde} />
          <Route path="/website" component={Website} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div >
  );
}

export default App;
