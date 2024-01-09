import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

const useRequireAuth = (roleRequired) => {
  const { user } = useContext(AuthContext);

  if (!user || (roleRequired && user.role !== roleRequired)) {
    return <Navigate to="/login" replace />;
  }

  return null;
};

export default useRequireAuth;
