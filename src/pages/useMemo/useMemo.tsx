import { useMemo, useState } from "react";

import { initialItems } from "./utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DemoProps {}

// eslint-disable-next-line no-empty-pattern
function MemoComp({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MemoComp;
