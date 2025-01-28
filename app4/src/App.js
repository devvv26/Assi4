import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter Application</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;
