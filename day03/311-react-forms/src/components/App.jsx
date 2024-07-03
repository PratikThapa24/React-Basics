import React from "react";

function App() {
  const [newName, setnewName] = React.useState("");
  const [headingText, setHeading] = React.useState("Yo");
  function handleChange(event) {
    setnewName(event.target.value);
    
    // Here the event object that is generated onChange, the target is the form and value is the value inside the form
    // console.log(event.target.value);
  }

  function handleOnClick() {
    setHeading(newName)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default App;
