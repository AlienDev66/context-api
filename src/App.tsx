import React from "react";
import CountProvider from "./context/count";
import Counter from "./Counter";
import Mirror from "./Mirror";

function App() {
  return (
    <>
      <CountProvider>
        <Counter />
        <hr />
        <Mirror />
      </CountProvider>
    </>
  );
}

export default App;
