import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    /* alert('You clicked me!'); */
  }
    return (
      <button onClick={handleClick}>
        I'm a button. Click me.
        Clicked {count} times
      </button>
    );
};
