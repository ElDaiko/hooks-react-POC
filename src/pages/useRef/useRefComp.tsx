/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, useRef, useState } from "react";

interface DemoProps {}

// eslint-disable-next-line no-empty-pattern
export default function UseRefComp({}: DemoProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

// eslint-disable-next-line no-empty-pattern
export function UseRefComp2({}: DemoProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}
