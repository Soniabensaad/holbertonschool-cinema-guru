import React, { useState, useEffect } from 'react';
import App from './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const postData = async () => {
      const response = await fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify({ key: 'value' })
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        setUserUsername(data.username);
      }
    };

    postData();
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
