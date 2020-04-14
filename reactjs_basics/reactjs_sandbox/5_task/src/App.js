import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';

//peli alkaa
//alkaa timer 2s
//kun timer on menny -> valitaan seuraava aktiivinen, sallitaan klikkaukset, klikkausajan timer -> jos aika menee umpeen, game over,
//odota pelaajan klikkausta
//kun pelaaja klikkaa, lasketaan pisteet tai game over, jos aika ei ole mennyt umpeen, nollaa maksimiaika

//nopeus on riippuvainen pisteiden määrästä


class App extends Component {
  nextActiveTimer = undefined
  gameOverTimer = undefined
  allowCircleClick = false;


  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    speed: 2000,
    circleClicked: false,
    level: 1
  }

  //set speed for next random number - happens once....
  startNextActiveTimer = time => {
    this.nextActiveTimer = setTimeout(this.determineNext, time);
  }
  startGameOverTimer = time => {
    this.gameOverTimer = setTimeout(this.endHandler, time);
  }
  closeNextActiveTimer = () => {
    clearTimeout(this.nextActiveTimer);
  }
  closeGameOverTimer = () => {
    clearTimeout(this.gameOverTimer);
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  determineNext = () => {
    let nextActive;
    this.allowCircleClick = true;
    do {
      nextActive = this.getRandomNumber(1, 4);
    } while (this.state.current === nextActive);

    this.setState({
      current: nextActive,
      circleClicked: false
    }, () => {
      // console.log('next active circle is', this.state.current);
    });
    this.startGameOverTimer(this.state.speed);
  }
  increaseSpeed = score => {
    if (score > 3) {
      this.setState({
        level: 2,
        speed: 1000
      })
    }
    if (score > 9) {
      this.setState ({
        level: 3,
        speed: 800
      })
    }
  }

  //click the circle
  clickHandler = e => {
    const _clickedCircleId = Number(e.target.id);
    // console.log('circle id is', _clickedCircleId);
    // console.log('current for clickHandler is ', this.state.current)

    //=> true when first clicked, false on every additional click until timer sets it true again
    if (this.allowCircleClick === false) {
      return;
    }
    this.allowCircleClick = false;
    //if clicked circle doesn's match id, call endHandler to end game
    if (_clickedCircleId !== this.state.current) {
      this.endHandler()
    }

    this.setState({
      score: this.state.score + 1,
      circleClicked: true
    }, () => {
      // console.log('User clicked ', _clickedCircleId, this.state.score);
    })
    //score doesn't render in time, so plus one
    this.increaseSpeed(this.state.score + 1);
    this.startNextActiveTimer(this.state.speed);
    this.closeGameOverTimer();
  }

  //start the game
  startHandler = () => {
    // console.log('Game started, current active is', this.state.current);
    this.startNextActiveTimer(500);
  }

  //ends the game
  endHandler = () => {
    this.closeNextActiveTimer();
    this.closeGameOverTimer();
    //set current back to 0
    this.setState({
      current: 0,
      showGameOver: true,
      level: 1,
      speed: 2000
    }, () => {
      // console.log('Current is ', this.state.current);
    })

    console.log('Game ended, your score is', this.state.score)
  }

  //reset the game
  closeHandler = () => {
    this.setState({
      showGameOver: false,
      score: 0,
    })
  }

  render() {

    return (
      <div className='container--main'>
        <GameOver score={this.state.score} showGameOver={this.state.showGameOver} closeHandler={this.closeHandler} />
        <h1 className='header--main'>Catch the Alpaca</h1>
        <div className='score-box'>Score: {this.state.score}</div>
        <div className='circle-box'>
          <Circle active={this.state.current === 1} clicked={this.state.circleClicked} id={1} level={this.state.level} clickHandler={this.clickHandler} />
          <Circle active={this.state.current === 2} clicked={this.state.circleClicked} id={2} level={this.state.level} clickHandler={this.clickHandler} />
          <Circle active={this.state.current === 3} clicked={this.state.circleClicked} id={3} level={this.state.level} clickHandler={this.clickHandler} />
          <Circle active={this.state.current === 4} clicked={this.state.circleClicked} id={4} level={this.state.level} clickHandler={this.clickHandler} />
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
