import Navigation from '../Navigation/Navigation.jsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
