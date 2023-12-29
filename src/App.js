import React from "react";
import SumInfo from './suminfo';
import Counter from './counter';
// App component
export default function App() {
    const [counters, setCounters] = React.useState([0]);
  
    const handleAddCounter = () => setCounters([...counters, 0]);
    const handleRemoveCounter = (index) => setCounters(counters.filter((_, i) => i !== index));
  
    const totalSum = counters.reduce((sum, count) => sum + count, 0);
    console.log('Counters:', counters);
  
    return (
      <>
        <h1>Codecamp Academy 01</h1>
        <SumInfo color="blue" totalSum={totalSum} />
        <button onClick={handleAddCounter} className="add-counter-btn">Add Counter</button>
        {counters.map((count, index) => (
          <Counter
            key={index}
            count={count}
            counters={counters}
            setCounters={setCounters}
            index={index}
            onRemove={() => handleRemoveCounter(index)}
          />
        ))}
      </>
    );
  }
  
