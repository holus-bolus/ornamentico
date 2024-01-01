import { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userName, password);
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-control">
            <label>Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
