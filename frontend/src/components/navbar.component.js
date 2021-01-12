import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">The Lifting App</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Exercises</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Add An Exercise</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
