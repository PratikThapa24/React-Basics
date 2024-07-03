import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [todoList, setTodo] = React.useState([]);
  console.log(todoList)

  function addTodo(newTodo) {
    setTodo(prevTodo => (
      [...prevTodo, newTodo]
    ))
  }

  // Function to delete todo
  function deleteTodo(id) {
    setTodo(prevTodo => prevTodo.filter((todo, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addTodo = {addTodo}/>
      {todoList.map((value, index) => {
        return <Note key={index} id={index} title={value.title} content={value.content} deleteTodo={deleteTodo}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
