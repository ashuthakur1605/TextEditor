// import './App.css';
import { useState } from 'react';
import Web from './practice/web';
import Nav from './practice/Naav';
import './practice/T.css';
import Aboutus from './practice/About';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";






function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#003344'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (<>
    <Router>
      <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

      <Switch>

        <Route exact path="/about">
          <Aboutus />
        </Route>

        <Route exact path="/">
          <Web mode={mode} />
        </Route>
      </Switch>
      </div>

      {/* <Nav/> */}
      {/* <Aboutus/> */}
    </Router>

  </>

  );
}

export default App;
