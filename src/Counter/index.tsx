import React from "react";
import { useCount } from "../context/count";

const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}>
        Contar
      </button>
    </>
  );
};

export default Counter;
