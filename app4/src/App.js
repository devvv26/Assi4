// App.js
import React from 'react';
import { CounterProvider } from './CounterContext'; // Import CounterProvider
import CounterDisplay from './CounterDisplay'; // Import CounterDisplay component
import CounterControls from './CounterControls'; // Import CounterControls component

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>React Counter with Context</h1>
        <CounterDisplay /> {/* This will display the current counter value */}
        <CounterControls /> {/* This will control the increment/decrement */}
      </div>
    </CounterProvider>
  );
}

export default App;
