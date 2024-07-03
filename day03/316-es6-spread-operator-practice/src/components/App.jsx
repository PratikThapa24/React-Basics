import React from "react";
import TodoItem from "./Todoitem";

function App() {
  const [formdata, setNewForm] = React.useState({ todo: "" });
  const [todoList, setTodoList] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodoList((prevTodo) => [...prevTodo, formdata.todo]);
    setNewForm({ todo: "" });
  }

  function deleteItem(id) {
    setTodoList((prevTodo) =>
      prevTodo.filter((item, index) => {
        return index != id;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="todo"
          value={formdata.todo}
        />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((value, index) => (
            <TodoItem
              key={index}
              id={index}
              value={value}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
