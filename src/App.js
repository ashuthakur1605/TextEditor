// import React from "react";
// // import './App.css';
// import { useState } from 'react';
// import Web from './practice/web';
// import Nav from './practice/Naav';
// import './practice/T.css';
// // import Aboutus from './practice/About'; 

// function App() {
//   const [mode, setmode] = useState('light')

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setmode('dark');
//       document.body.style.backgroundColor = '#003344'
//     }
//     else {
//       setmode('light');
//       document.body.style.backgroundColor = 'white'
//     }
//   }

//   return (<>

//     <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
//     <Web mode={mode} />
//   </>

//   );
// }

// export default App;

import { useState } from 'react';
import Web from './practice/web';
import Nav from './practice/Naav';
import './practice/T.css';
import Aboutus from './practice/About';
// import Aboutus from './practice/About'; 

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
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
    }
  }

  // function App() {
  //   document.body.style.backgroundColor = 'white'
  // }



  return (<>

    <Router>
      <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <Switch>

          <Route exact path="/">
            <Web mode={mode} />
          </Route>
          <Route exact path="/About">
            <Aboutus />
          </Route>

        </Switch>
      </div>

      {/* <Nav/> */}
      {/* <Aboutus/> */}
    </Router>

  {/* <Nav title='TextUtils' mode={mode} toggleMode={toggleMode} />
  <Web mode={mode}  */}
    </>
);
}
export default App;