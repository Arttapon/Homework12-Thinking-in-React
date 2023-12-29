import React from 'react'
// Counter component

export default function Counter({ count, counters, setCounters, index, onRemove }) {
    const updateCounter = (newValue) => {
      const newCounters = [...counters];
      newCounters[index] = newValue;
      setCounters(newCounters);
    };
  
    const handleIncrement = () => updateCounter(count + 1);
    const handleDecrement = () => updateCounter(Math.max(count - 1, 0));
    const handleReset = () => updateCounter(0);
  
    return (
      <div className='counter' key={index}>
        <button onClick={handleDecrement} className="decrement-btn"> - </button>
        <h3>{count}</h3>
        <button onClick={handleIncrement} className="increment-btn"> + </button>
        <button onClick={handleReset} className="reset-btn"> C </button>
        <button onClick={onRemove} className="remove-btn">X</button>
      </div>
    );
  }
  