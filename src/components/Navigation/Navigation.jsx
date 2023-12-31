import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Main</Link>
        </li>
        <li>
          <Link to={'aparthotel-villa-manja'}>Aparthotel Villa Manja</Link>
        </li>
        <li>
          <Link to={'/online-store'}>Online Store</Link>
        </li>
        <li>
          <Link to={'/interior-design'}>Interior Design</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Contacts</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
