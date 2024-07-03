import React from "react";


function App() {
  setTimeout(updateNewTime, 1000);
  let time = new Date().toLocaleTimeString().split(" ")[0];
  const [currentTime, setNewTime] = React.useState(time);
  console.log(currentTime)

  function updateNewTime() {
    let time = new Date().toLocaleTimeString().split(" ")[0];
    setNewTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateNewTime}>Get Time</button>
    </div>
  );
}

export default App;
