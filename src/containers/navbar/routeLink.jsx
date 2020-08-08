import React from 'react'

const LinkList = ({link, text}) => (
  <li><a href={link}>{text}</a></li>
)

export default class RouteNav extends React.Component {
  render() {
    return (
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
    )
  }
}
