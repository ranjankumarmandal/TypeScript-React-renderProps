import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ClickCounter from './components/utils/ClickCounter';
import HoverCounter from './components/utils/HoverCounter';

function App() {
  return (
    <>
      <Counter
        render={(count, increamentCounter) => (
          <ClickCounter count={count} increamentCounter={increamentCounter} />
        )}
      />

      <Counter
        render={(count, increamentCounter) => (
          <HoverCounter count={count} increamentCounter={increamentCounter} />
        )}
      />
    </>
  );
}

export default App;
