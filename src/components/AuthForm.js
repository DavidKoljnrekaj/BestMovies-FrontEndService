import React, { useState } from 'react';
import { signup, login } from '../services/userService';
import './AuthForm.js.css'; 

function AuthForm({ onLogin, onClose  }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    setMessage('');
    if (username === '' || password === '') {
      setMessage('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setMessage('Password should be at least 6 characters long');
      return;
    }
    const confirmation = window.confirm('Are you sure you want to sign up?');
    if (confirmation) {
      try {
        await signup(username, password);
        setMessage('User successfully created, please login');
      } catch (error) {
        setMessage(`Please choose a different username`);
      }
    }
  };

  const handleLogin = async () => {
    setMessage('');
    if (username === '' || password === '') {
      setMessage('Please fill in all fields');
      return;
    }
    try {
      await login(username, password);
      onLogin(username);
      onClose();
    } catch (error) {
      setMessage(`Please enter a valid username and password`);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Authentication</h1>
      <div className="auth-card">
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
export default AuthForm;
