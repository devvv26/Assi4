// CounterDisplay.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext'; // Import context

const CounterDisplay = () => {
  const { count } = useContext(CounterContext); // Access the counter value from context

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
