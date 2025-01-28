import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="counter-card">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        <div>
          <button
            className="increment-btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="decrement-btn"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="reset-btn"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
