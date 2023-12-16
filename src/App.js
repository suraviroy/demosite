import React from 'react';
import './App.css';
import SidePanel from './pages/SidePanel';
import Topsection from './pages/Topsection';
import Bottomsection from './pages/Bottomsection';

function App() {
  return (
    <div className="App">
     {/* <h1 className="text-3xl font-bold underline ">
      Hello world!
    </h1> */}
    <div className='sidepanel2'><SidePanel /></div>
    <div className='topsection'><Topsection /></div>
    <div className='bottomsection'><Bottomsection /></div>
    </div>
  );
}

export default App;
