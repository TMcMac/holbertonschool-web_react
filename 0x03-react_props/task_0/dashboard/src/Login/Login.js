import './Login.css';
import React from 'react';

function Login() {
  return (
    <div className="App">
      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="btn">OK</button>
      </div>
    </div>
  );
}

export default Login;
