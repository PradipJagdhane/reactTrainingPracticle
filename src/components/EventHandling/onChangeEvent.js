import React, { useState } from "react";

function FormHandler() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    window.location.replace('www.google.com');
        console.log("Form Submitted")
  };

  const handleChange = (event) => {
    setValue(event.target.value); // Update the state with the input value
  };

  console.log("input value",value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandler;
