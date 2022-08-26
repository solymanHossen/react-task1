import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (



 <nav className='navbar'>
<button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">=</button>
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
    <Link to="/form">Form</Link>
    <Link to="/list">list</Link>
   </nav>
  );
};

export default NavBar;