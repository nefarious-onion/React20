import React from 'react';
import './GameOver.css'

const GameOver = ({ score, showGameOver, closeHandler }) => {

    return (
        <div className={
            showGameOver === true
            ? 'overlay'
            : 'hidden'}>
            <div className='popup'>
                <h1>Game Over!</h1>
                <h2>Your Score:</h2>
                <div className='endScore'>{score}</div>
                <button onClick={closeHandler} className='closeButton btn'>Close</button>
            </div>
        </div>
    );
}

export default GameOver;
