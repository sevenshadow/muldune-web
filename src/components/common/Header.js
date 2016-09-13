import React, {ProtoTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>  {
    return (
      <nav className="navbar">
        <IndexLink to="/" activeClassName="topNavActive">Home</IndexLink>
        <span> | </span>
        <Link to="/services" activeClassName="topNavActive">Services</Link>
        <span> | </span>
        <Link to="/projects" activeClassName="topNavActive">Projects</Link>
        <span> | </span>
        <Link to="/about" activeClassName="topNavActive">About</Link>
        <span> | </span>
        <Link to="/contact" activeClassName="topNavActive">Contact</Link>

      </nav>
    );
           
};

export default Header;