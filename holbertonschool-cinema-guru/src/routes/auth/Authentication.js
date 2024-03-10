import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switchBoolean, set_switchBoolean] = useState(true);
  const [usernamestring, setUsernamestring] = useState("");
  const [passwordstring, setPasswordstring] = useState("");

  return (
    <div>
      <form>
        <button onClick={() => set_switchBoolean(true)}>
          Sign In
        </button>
        <button onClick={() => set_switchBoolean(false)}>
          Sign Up
        </button>
      </form>
      {_switchBoolean ? <Login setUsername={setUsernamestring} setPassword={setPasswordstring} /> : <Register setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />}
    </div>
  );
};

export default Authentication;
