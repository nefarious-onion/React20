import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {

  state = {
    score: 0,
    id: '',
    current: 0
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  determineNext = () => {
    let nextActive;
    do {
      nextActive = this.getRandomNumber(1, 4);
    } while (this.state.current === nextActive);
  

    this.setState({
      current: nextActive
    }, () => {
      console.log('current is', this.state.current);
    })
  }

  clickHandler = e => {
    const id = e.target.id;

    this.setState({
      score: this.state.score + 1
    }, () => {
      console.log('Clicked ', id, this.state.score);
    })
  }

  render() {
    
    return (
      <div className='container--main' >
        <h1 className='header--main' >The Speed Game</h1>
        <div className='score-box' >Score: {this.state.score}</div>
        <div className='circle-box'>
          <Circle id='1' clickHandler={this.clickHandler} />
          <Circle id='2' clickHandler={this.clickHandler} />
          <Circle id='3' clickHandler={this.clickHandler} />
          <Circle id='4' clickHandler={this.clickHandler} />
        </div>
        <div className='btn-box'>
          <button onClick={this.determineNext} className='btn'>Start Game</button>
          <button className='btn'>End Game</button>
        </div>

      </div>
    );
  }
}

export default App;
