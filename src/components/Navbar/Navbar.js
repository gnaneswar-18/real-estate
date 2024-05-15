import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-logo">RealEstateCo</a>
        <div className="navbar-search">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn"><Link to='/search'>
          Search</Link></button>
        </div>
        <ul className="navbar-menu">
          <li><a href="/" className="navbar-link">Home</a></li>
          <li><a href="/search" className="navbar-link">Properties</a></li>
          <li><a href="/about" className="navbar-link">About Us</a></li>
          <li><a href="/contactus" className="navbar-link">Contact Us</a></li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        </div>
      </div>
    </nav>


  )
}

export default Navbar
