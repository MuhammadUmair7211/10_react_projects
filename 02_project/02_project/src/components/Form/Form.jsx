import React from "react";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />
      </div>
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="" />
      </div>
      <div className="input-group">
        <label htmlFor="text">Text</label>
        <textarea name="text" id="" rows={3} cols={70}></textarea>
      </div>
      <div className="submit-btn">
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default Form;
