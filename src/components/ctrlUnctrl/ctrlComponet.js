import React, { useState } from "react";

const ControlledComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (event) => {
    const { name, value} = event.target.value;

    setFirstName(name, value);
    setLastName(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Value");
    console.log("input value", firstName);
  };
  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input type="text" name="firstName" value={firstName} onChange={handleChange} />
        </label><br /> <br />
        <label>
            Last Name:
            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
        <h2>{firstName}{lastName}</h2>
      </form>
    </div>
  );
};

export default ControlledComponent;
