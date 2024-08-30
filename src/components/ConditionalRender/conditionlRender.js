import React, { useState } from "react";
import UseMemoEx from "../Hooks/UseMemo/UseMemo";

const ConditionalRender = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError ] = useState("");

  function handleForm(e) {
    e.preventDefault();

    if (!user || !password) {
      console.log("all fields are mandetory");
    } else {
      const formData = { user, password };
      console.log("Form Data", formData);

      setLoginStatus(true);
      console.log("Form Submited");
    }
  }

  return (
    <div>
      {/* {loginStatus && <UseMemoEx />} */}

      {/* {loginStatus ? <div>Welcome</div>: <div>Please Sign up</div>} */}


      {loginStatus ? (
        <UseMemoEx />
      ) : (
        <form onSubmit={handleForm}>
          <label>
            Username:
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      )}

    </div>
  );
};

export default ConditionalRender;
