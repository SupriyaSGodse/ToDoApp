import { useState } from 'react';
import HOCComponent from './HOCComponent';

const Clickcomponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p id="Hi">
        My Name is {props.name} and age is {props.age}
      </p>
      <p onClick={() => setCount(count + 1)}>You Cliked me {count} times</p>

      <h1 onClick={() => alert('Hello')}>Hello</h1>
    </div>
  );
};

export default HOCComponent(Clickcomponent);
