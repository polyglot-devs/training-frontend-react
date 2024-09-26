import { useState } from "react";

function Counter({ number = 1 }) {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => {
        setCount(count + number);
      }}
    >
      <button>count={count}</button>
    </div>
  );
}

export default Counter;
