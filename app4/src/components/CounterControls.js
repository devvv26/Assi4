// CounterControls.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext'; // Import context

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext); // Access functions from context

  return (
    <div>
      <button onClick={increment}>Increment</button> {/* Button to increment */}
      <button onClick={decrement}>Decrement</button> {/* Button to decrement */}
    </div>
  );
};

export default CounterControls;
