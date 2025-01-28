import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext); // Access the functions from context

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;
