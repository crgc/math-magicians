import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calc',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <div className="nav-left">Math Magicians</div>
      <div className="nav-right">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
