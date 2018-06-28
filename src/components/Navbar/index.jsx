import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const menu = ['home', 'login', 'calendar'];

const Navbar = () => (
    <ul className="Navbar">
      {menu.map(menuItem =>
        <li key={menuItem} className="Navbar__elem">
          <Link to={menuItem} className="Navbar__link" href="">{menuItem}</Link>
        </li>
        )}
    </ul>
);

export default Navbar;



