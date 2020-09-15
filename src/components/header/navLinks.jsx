import React from 'react';

import { NavLink } from 'react-router-dom';

const NavLinkList = () => (
  <ul>
    <li><NavLink to="/portfolio/about" activeClassName="active" className="link">About</NavLink></li>
    <li><NavLink to="/projects" activeClassName="active" className="link">Projects</NavLink></li>
    <li><NavLink to="/tasks" activeClassName="active" className="link">Talks</NavLink></li>
    <li><NavLink to="/blogs" activeClassName="active" className="link">Blogs</NavLink></li>
    <li><NavLink to="/resume" activeClassName="active" className="link">Resume</NavLink></li>
    <li><NavLink to="/contact" activeClassName="active" className="link">Contact</NavLink></li>
    <li><NavLink to="/pages" activeClassName="active" className="link dropdown">Pages</NavLink></li>
  </ul>
)

export default NavLinkList;