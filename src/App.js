// import './App.css';
import { useState } from 'react';
import Web from './practice/web';
import Nav from './practice/Naav';
import './practice/T.css';
// import Aboutus from './practice/About'; 

import React from "react";






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

    <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <Web mode={mode} />
  </>

  );
}

export default App;
