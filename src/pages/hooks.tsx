import { useState, useEffect } from "react";

const HooksComp = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("The count is:", count);

    return () => {
      console.log("Im being cleaned up");
    };
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
};

export default HooksComp;
