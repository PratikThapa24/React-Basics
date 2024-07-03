import React from "react";

function App() {
  const [mouse, setMouse] = React.useState(false)
  function onOver() {
    setMouse(true)
    console.log("over")
  }

  function onOut() {
    setMouse(false)
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor : mouse ? "black" : "white" }} onMouseOver={onOver} onMouseOut={onOut}>Submit</button>
    </div>
  );
}

export default App;
