import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="header">
                <h2 className="logo">Irshad's Portfolio</h2>
                <input type="checkbox" id="chk"/>
                <label htmlFor="chk" className="show-menu-btn">
                  <i className="fa fa-ellipsis-h"></i>
                </label>
                <ul className="menu">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/contact">Contact</Link>
                  <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fa fa-times"></i>
                  </label>
                </ul>
            </div>
        )
    }
}