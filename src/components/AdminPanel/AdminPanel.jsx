import { useAuth } from "../../hooks/useAuth.jsx";

const AdminPanel = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h2>AdminPanel</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminPanel;
