import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      {props.userIsRegistered ? (
        <Input type="password" placeholder="Password" />
      ) : (
        <>
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </>
      )}
      {props.userIsRegistered ? (
        <Button value="Login" />
      ) : (
        <Button value="Register" />
      )}
    </form>
  );
}

export default Form;
