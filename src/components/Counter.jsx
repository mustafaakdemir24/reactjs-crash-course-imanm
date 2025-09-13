import { useState } from "react";

const Counter = () => {
  const [array, setArray] = useState([]);

  return (
    <div>
      <h1>{array.toString()}</h1>
      <button
        onClick={() => {
          setArray((prevArray) => [...prevArray, "+1"]);
        }}
      >
        Increment
      </button>
      <button onClick={() => setArray((prevArray) => [...prevArray, "-1"])}>
        {" "}
        Decrement
      </button>
    </div>
  );
};

export default Counter;
