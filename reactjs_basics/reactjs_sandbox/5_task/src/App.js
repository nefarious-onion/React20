import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container--main' >
        <h1 className='header--main' >The Speed Game</h1>
        <div className='score-box' >Score:</div>
        <div className='btn-box'>
          <button className='btn'>Start Game</button>
          <button className='btn'>End Game</button>
        </div>

      </div>
    );
  }
}

export default App;




