import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ClickCounter from './components/utils/ClickCounter';

function App() {
  return (
    <>
      <Counter
        render={(count, increamentCounter) => (
          <ClickCounter count={count} incrementCounter={increamentCounter} />
        )}
      />
    </>
  );
}

export default App;
