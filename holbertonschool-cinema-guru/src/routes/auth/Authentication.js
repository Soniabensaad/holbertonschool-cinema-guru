import React, { useState } from 'react';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switchBoolean, set_switchBoolean] = useState(true);
  const [usernamestring, setUsernamestring] = useState("");
  const [passwordstring, setPasswordstring] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (_switchBoolean) {
        response = await axios.post('/api/auth/login', { username: usernamestring, password: passwordstring });
      } else {
        response = await axios.post('/api/auth/register', { username: usernamestring, password: passwordstring });
      }

      const { token } = response.data;

      
      localStorage.setItem('token', token);

     
      setUserUsername(usernamestring);

    
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
