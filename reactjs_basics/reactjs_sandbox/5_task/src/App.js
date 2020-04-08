import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {
  timer = undefined

  state = {
    score: 0,
    id: 0,
    current: 0
  }

  //set speed for next random number - happens once....
  startTimer = () => {
    this.timer = setTimeout(this.determineNext, 2000);
  }
  closeTimer = () => {
    clearTimeout(this.timer);
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
      console.log('next active circle is', this.state.current);
    });
  }

  clickHandler = e => {
    const _id = e.target.id;

    this.setState({
      score: this.state.score + 1
    }, () => {
      console.log('Clicked ', _id, this.state.score);
    })
  }

  //calls for timer
  startHandler = e => {
    console.log('Game started, current active is', this.state.current);
    this.startTimer()
  }
  //endhandler -> clear timeout
  endHandler = e => {
    this.closeTimer()
    //set current back to 0
    this.setState({
      current: 0
    }, () => {
      console.log('Current is ', this.state.current);
    })
   
    console.log('Game ended, your score is', this.state.score)
  }

  render() {

    return (
      <div className='container--main' >
        <h1 className='header--main' >The Speed Game</h1>
        <div className='score-box' >Score: {this.state.score}</div>
        <div className='circle-box'>
          <Circle current={this.state.current} id={1} clickHandler={this.clickHandler} />
          <Circle current={this.state.current} id={2} clickHandler={this.clickHandler} />
          <Circle current={this.state.current} id={3} clickHandler={this.clickHandler} />
          <Circle current={this.state.current} id={4} clickHandler={this.clickHandler} />
        </div>
        <div className='btn-box'>
          <button onClick={this.startHandler} className='btn'>Start Game</button>
          <button onClick={this.endHandler} className='btn'>End Game</button>
        </div>

      </div>
    );
  }
}

export default App;
