import { useState, useEffect } from "react";

function Effect() {
  {
    const [count, setCount] = useState(10);
    const [data, setData] = useState(100);
    useEffect(() => {
      console.warn("called with data state");
    }, []);
    return (
      <div>
        <h1>Count:{count}</h1>
        <h1> Data:{data}</h1>
        <button onClick={() => setCount(count + 1)}> Update Count </button>
        <button onClick={() => setData(data + 1)}> Update Data </button>
      </div>
    );
  }
}

export default Effect;
