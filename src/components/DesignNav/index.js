import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CodeNav extends Component {
  render() {
    return (
      <nav className="page-menu">
        <NavLink className="nav" to="/design/comp-one">BATMAN</NavLink>
        <NavLink className="nav" to="/design/comp-two">POKEMON</NavLink>
      </nav>
    );
  }
}

export default CodeNav;
