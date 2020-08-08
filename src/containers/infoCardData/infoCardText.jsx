import React from 'react';

export default class cardInfoText extends React.Component{
  render() {
    return (
    <div className="info-side">
      <div className="intro">
        Hello, my name is
      </div>
      <h1 className="fname">Md Irshad</h1>
      <div className="text-info">
        <p>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a href="#blog">my blog</a> and regularly <a href="#speak">speak</a> at various web conferences and meetups. Want to know how I may help your project? Check out my project <a href="#case">case studies</a> and <a href="#resume">resume.</a></p>
      </div>
      <a href="#hireme" className="hire-btn">Hire Me</a>
    </div>
    )
  }
}