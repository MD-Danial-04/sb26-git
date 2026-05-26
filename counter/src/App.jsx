import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <>
      <h1>Number of durians!</h1>
      <p className="counter">{counter}</p>
      <button onClick={increment}>Add 1</button>
      <button onClick={decrement}>Decrement 1</button>
    </>
  );
}

export default App
