import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Board from './chess/board';
import Board from './scheduler/board'
import Timing from './scheduler/timing'
function App() {
  return (
    <div>
      <div className="left" >
        <Timing />
      </div>
      <div className="right" >
        <Board position={[0, 0]} />
      </div>
    </div>
  );
}

export default App;
