import React, { useState } from 'react';
import './Lecture.css';
import Button from '../Button/Button';

const LectureHooks = () => {

    const [counter, setCounter] = useState(0);

    const addHandler = () => setCounter(counter + 1);
    const removeHandler = () => setCounter(counter - 1);
    const resetHandler = () => setCounter(0);

    return (
         <div className="container">
                <div className="vote-box" >
                    <h1>These are my votes:</h1>
                    <h2> {counter}</h2>
                    <Button eventHandler={addHandler} buttonText='Add one'/>
                    <Button eventHandler={removeHandler} buttonText='Remove one'/>
                    <Button eventHandler={resetHandler} buttonText='Reset'/>
                </div>
            </div>
    );
}

export default LectureHooks;
