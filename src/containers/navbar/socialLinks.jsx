import React, { Component } from 'react'

const Links = ({link,font}) => (
  <a href={link}><i className={font}></i></a>
)

export default class SocialLinks extends Component {
  render() {
    return (
      <div className="sociallinks">
        <ul>
          <Links link="#github" font="fa fa-github" />
          <Links link="#twitter" font="fa fa-twitter" />
          <Links link="#facebook" font="fa fa-facebook" />
          <Links link="#dribble" font="fa fa-dribbble" />
          <Links link="stackoverflow" font="fa fa-stack-overflow" />
        </ul>
      </div>
    )
  }
}
