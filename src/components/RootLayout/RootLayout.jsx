import Navigation from '../Navigation/Navigation.jsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
