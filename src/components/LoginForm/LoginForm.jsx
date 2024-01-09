import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      setError('Username and password are required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors

    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      login(username);
      localStorage.setItem('token', data.accessToken);
      if (onClose) {
        onClose();
      } else {
        navigate('/');
      }
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
