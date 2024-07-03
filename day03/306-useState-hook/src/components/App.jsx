import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function increaseCounter() {
    setCount(count + 1)
  }

  function decreaseCounter() {
    setCount( count - 1)
  }

  return (
    (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
      </div>
    )
  );
}

export default App;
