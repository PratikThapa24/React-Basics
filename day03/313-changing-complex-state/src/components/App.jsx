import React from "react";

function App() {
  const [formData, setFormData] = React.useState({ firstname: "", lastname: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(value);
  }

  function handleSubmit(event) {
    // Prevent the default reload behavior
    event.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <div className="container">
      <h1>Name {formData.firstname} {formData.lastname}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
        />
        <input
          onChange={handleChange}
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
