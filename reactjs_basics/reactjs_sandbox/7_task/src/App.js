import React, { useState } from 'react';
import Button from './Button/Button'

const App = () => {

  const [love, setLove] = useState(0);
  const [hate, setHate] = useState(0);

  const addLove = () => setLove(love + 1);
  const addHate = () => setHate(hate + 1);
  const resetHandler = () => {
    setLove(0);
    setHate(0);
  }

  return (
    <div>
      <Button eventHandler={addLove} buttonText='Love it!' />
      <Button eventHandler={addHate} buttonText='Hate it!' />
      <Button eventHandler={resetHandler} buttonText='Reset votes' />
      <div>
        <h1>Votes:</h1>
        <h2>Love {love}</h2>
        <h2>Hate {hate}</h2>
      </div>
    </div>
  );
}

export default App;
