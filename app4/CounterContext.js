// CounterContext.js
import React, { createContext, useState } from 'react';

// Create context for Counter
const CounterContext = createContext();

// Create the CounterProvider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0); // state to hold counter value

  // Increment function
  const increment = () => setCount(prevCount => prevCount + 1);

  // Decrement function
  const decrement = () => setCount(prevCount => prevCount - 1);

  // Provide context value (counter state and functions)
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
