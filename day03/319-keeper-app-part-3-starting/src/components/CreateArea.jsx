import React from "react";

function CreateArea(props) {
  const [ todo, setTodo ] = React.useState({ title: "", content: "" });

  function updateTodo(event) {
    const { name, value } = event.target;
    setTodo((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  function submitForm(event) {
    event.preventDefault();
    props.addTodo(todo);
    setTodo({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={updateTodo}
          name="title"
          placeholder="Title"
          value={todo.title}
        />
        <textarea
          onChange={updateTodo}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={todo.content}
        />
        <button onClick={submitForm}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
