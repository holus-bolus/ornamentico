import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoginStatusChange = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoggedIn, onLoginStatusChange }}
    >
      {children}
    </AuthContext.Provider>
  );
};
