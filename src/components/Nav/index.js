import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <nav className="menu">
        <header className="app-header">
          <h1 className="app-title">PEREZGA</h1>
          <NavLink className="nav" to="/code">CODE</NavLink>
          <NavLink className="nav" to="/design">DESIGN</NavLink>
          <NavLink className="nav" to="/finearts">ART</NavLink>
        </header>
      </nav>
    );
  }
}

export default Nav;
