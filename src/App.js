import './App.css';
// import Navbar from './navbar.js'
// import Web from './practice/web';
// import Texty from './practice/texty';
// import './practice/T.css';
import Navbar from './navbar'; 
// import Resp from './resp'




function App() {

  return (<>
  <Navbar Aboutus='About us ' search = 'Search'/>
  {<Resp/>}
  {/* <Texty/>
  <Web/> */}
   
 </>
    
  );
}

export default App;
