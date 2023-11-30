import React, { useState } from 'react';
import { signup, login } from '../services/userService';

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    signup(username, password);
  };

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div>
      <h1>Authentication</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthForm;
