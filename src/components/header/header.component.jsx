import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/contact">
        CONTACT
      </NavLink>
    </nav>
  </div>
);

export default Header;
