import React from 'react';

const Links = ({link,font}) => (
  <a href={link}><i className={font}></i></a>
)

const LinkList = ({link, text}) => (
  <li><a href={link}>{text}</a></li>
)


export default class Navbar extends React.Component{
    render(){
        return(
            <div className="header">
              <div className="holdings">
                <div className="sociallinks">
                  <ul>
                    <Links link="#github" font="fa fa-github" />
                    <Links link="#twitter" font="fa fa-twitter" />
                    <Links link="#facebook" font="fa fa-facebook" />
                    <Links link="#dribble" font="fa fa-dribbble" />
                    <Links link="stackoverflow" font="fa fa-stack-overflow" />
                  </ul>
                </div>
                <div className="routes">
                  <nav>
                    <ul>
                      <li><a href="#about" className="active">About</a></li>
                      <LinkList link="#projects" text="Projects" />
                      <LinkList link="resume" text="Resume" />
                      <LinkList link="#talks" text="Talks" />
                      <LinkList link="#blog" text="Blog" />
                      <LinkList link="#contacts" text="Contacts" />
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