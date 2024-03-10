import React, { useState } from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  const [usernamestring, setUsernamestring] = useState(username);
  const [passwordstring, setPasswordstring] = useState(password);

  const handleSubmit = () => {
    // Perform login logic here
  };

  return (
    <form>
      <input
        type="text"
        value={usernamestring}
        onChange={(e) => setUsernamestring(e.target.value)}
      />
      <input
        type="password"
        value={passwordstring}
        onChange={(e) => setPasswordstring(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Login;
