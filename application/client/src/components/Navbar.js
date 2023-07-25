import React from 'react';
import '../styling/nav.css';

export const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Tour-Vista</a>
          </li>
          <li>
            <a href="Natour">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
