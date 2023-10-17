import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { userLogout } from '../../Redux/userSlice';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const links = [
    { name: 'Home', to: '/home' },
    { name: 'Bookings', to: '/bookings' },
    { name: 'Payment', to: '/payment' },
  ];

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Icon name="bus" size="big" />
          <Link to="/home" style={{ color: "#f39c12" }}>
            BusTicketPro
          </Link>
        </div>
        <div
          className={`navbar-mobile-icon ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <Icon name={isOpen ? 'times' : 'bars'} size="small" />
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  activeClassName="active" // Set the class to "active" for active links
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              {user ? (
                <div className="dropdown">
                  <span>Hello, {user.name}</span>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              ) : (
                <NavLink to="/" activeClassName="active">
                  <Icon name="user" size="large" color="white" />
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
