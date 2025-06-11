import { useState } from "react";

const useStateComp = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
};

export default useStateComp;
