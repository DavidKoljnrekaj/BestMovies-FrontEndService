import React, { useState } from 'react';
import { signup, login } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import './AuthForm.js.css'; 

function AuthForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setMessage('');
    try {
      // Replace this with your actual signup logic
      await signup(username, password);
      setMessage('User succesfully created, please login');
    } catch (error) {
      setMessage(`Please choose a different username`);
    }
  };

  const handleLogin = async () => {
    setMessage('');
    try {
      await login(username, password);
      onLogin(username);
      navigate('/');
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
