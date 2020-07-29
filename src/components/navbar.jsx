import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="header">
              <div className="holdings">
                <div className="sociallinks">
                  <ul>
                    <a href="#github"><i className="fa fa-github"></i></a>
                    <a href="#twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#dribble"><i className="fa fa-dribbble"></i></a>
                    <a href="#instagram"><i className="fa fa-instagram"></i></a>
                  </ul>
                </div>
                <div className="routes">
                  <nav>
                    <ul>
                      <li><a href="#about" className="active">About</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#resume">Resume</a></li>
                      <li><a href="#talks">Talks</a></li>
                      <li><a href="#blog">Blog</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li>
                        <a href="#pages">Pages</a>
                        <div className="drop-menu">
                          <a href="#project">Project Case Studies</a>
                          <a href="#blogs">Blogs</a>
                          <a href="#contact">Contact Form</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="show-menu-btn">
                  <input type="checkbox" id="chk"/>
                  <label htmlFor="chk" className="show-btn">
                    <i className="fa fa-bars">
                  </i></label>
                  <label htmlFor="chk" className="hide-btn">
                    <i className="fa fa-times">
                  </i></label>
                </div>
              </div>
            </div>
        )
    }
}