import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function createNote(value) {
  return <Note key={value.id} title={value.title} content={value.content} />;
}

function App() {
  // Use () to return without using return statement
  return (
    <>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </>
  );
}

export default App;
