import { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin, onSignUp, loginError }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      onSignUp(userName, password);
    } else {
      onLogin(userName, password);
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <form onSubmit={handleSubmit} className="login-form">
          {loginError && <div className="login-error">{loginError}</div>}
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
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="btn-toggle"
            >
              {isSignUp
                ? 'Already have an account? Login'
                : 'Need an account? Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
