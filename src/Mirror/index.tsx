import React from "react";
import { useCount } from "../context/count";

const Mirror = () => {
  const { count } = useCount();
  return <h1>Counter: {count}</h1>;
};

export default Mirror;
