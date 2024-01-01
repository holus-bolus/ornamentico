import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginStatusChange = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLoginStatusChange }}>
      {children}
    </AuthContext.Provider>
  );
};
