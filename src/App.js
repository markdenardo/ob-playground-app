import './App.css';
import Canvas from './Canvas'
import Strategy from './Strategy'
import React, { useState, useEffect } from 'react'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas/>
       <Strategy/>

      </header>
    </div>
  );
}

export default App;
