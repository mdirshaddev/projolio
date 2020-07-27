import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="header">
              <div className="holdings">
                <div className="sociallinks">
                  <ul>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-dribbble"></i>
                    <i className="fa fa-instagram"></i>
                  </ul>
                </div>
                <div className="routes">
                  <nav>
                    <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">Resume</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                      <li>
                        <a href="">Know More</a>
                        <div className="drop-menu">
                          <a href="#">Project Case Studies</a>
                          <a href="#">Blogs</a>
                          <a href="#">Contact Form</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
        )
    }
}