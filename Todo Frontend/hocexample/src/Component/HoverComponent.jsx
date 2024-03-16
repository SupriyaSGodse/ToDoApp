import { useState } from 'react';
import HOCComponent from './HOCComponent';

const Hovercomponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        My Name is {props.name} and age is{props.age}
      </p>
      <p onMouseOver={() => setCount(count + 1)}>
        You Hover over me {count} times
      </p>
    </div>
  );
};

export default HOCComponent(Hovercomponent);
