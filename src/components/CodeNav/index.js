import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CodeNav extends Component {
  render() {
    return (
      <nav className="menu">
        <NavLink className="nav" to="/code"></NavLink>
        <NavLink className="nav" to="/code/hyperspace">HYPERSPACE</NavLink>
        <NavLink className="nav" to="/code/headcount">HEADCOUNT</NavLink>
        <NavLink className="nav" to="/code/movie-tracker">MOVIE TRACKER</NavLink>
      </nav>
    );
  }
}

export default CodeNav;
