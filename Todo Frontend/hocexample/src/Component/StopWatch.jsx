import React, { useState } from 'react';
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={(e) => setCounter(counter + 1)}> Counter </button>
      <p> Counter is {counter}</p>
    </div>
  );
};

export default StopWatch;
