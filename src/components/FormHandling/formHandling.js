import React, { useState } from "react";

const FormValidate = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function submitFormHandler(e) {
    e.preventDefault();
    const formData = {fname, email}
    console.log("Form Data", formData);
    // console.log("Event occur", e);
    if(!formData.fname){
        error.fname = 'Name is required';   
    }

    if(!formData.email){
        error.email = 'Email required';
    }
    if (!fname || !email) {
      alert("all fields are mandetory");
      
    } else {
      console.log("Form Submitted");
    }
  }

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {error.fname}
          </label>
        </div>
        <br /> <br />
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div style={{ color: "red" }}> {error.email}</div>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidate;
