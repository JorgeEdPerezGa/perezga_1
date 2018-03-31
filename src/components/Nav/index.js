import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <nav className="menu">
        <header className="app-header">
          <NavLink className="app-title" to="/">JORGE ED PEREZGA</NavLink>
          <NavLink className="nav" to="/code">CODE</NavLink>
          <NavLink className="nav" to="/design">DESIGN</NavLink>
          <NavLink className="nav" to="/contact">CONTACT</NavLink>
        </header>
      </nav>
    );
  }
}

export default Nav;
