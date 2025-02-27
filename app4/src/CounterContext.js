import React, { createContext, useState } from 'react';

// Create the Context
const CounterContext = createContext();

// Create the Provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the counter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
