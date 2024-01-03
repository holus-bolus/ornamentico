import React, {useContext, useState} from 'react';
import {AuthContext} from '../../AuthContext.jsx';
import {useNavigate} from "react-router-dom";

const LoginForm = ({onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {onLoginStatusChange} = useContext(AuthContext);
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      login(username);
      localStorage.setItem('token', data.accessToken);
      onLoginStatusChange(true);
      if (onClose) {
        onClose();
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
