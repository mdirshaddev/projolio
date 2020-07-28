import React from 'react';
import { Link } from 'react-router-dom';
import i from '../images/table.jpeg';
export default class Navbar extends React.Component{
    render(){
        return(
            <div className="header">
              <div className="holdings">
                <div className="sociallinks">
                  <ul>
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </ul>
                </div>
                <div className="routes">
                  <nav>
                    <ul>
                      <li><a href="/about" className="active">About</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">Resume</a></li>
                      <li><a href="#">Talks</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                      <li>
                        <a href="">Pages</a>
                        <div className="drop-menu">
                          <a href="#">Project Case Studies</a>
                          <a href="#">Blogs</a>
                          <a href="#">Contact Form</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="show-menu-btn">
                  <i className="fa fa-bars"></i>
                </div>
              </div>
            </div>
        )
    }
}