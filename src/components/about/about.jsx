import React from 'react';

//image import
import i from '../../images/profile.jpg';

const About = () => (
  <div className="about container-topBottom">
    <div className="content">
      <div className="profile">
        <img data-aos="fade-down" src={i} alt="profile_picture"/>
        <div data-aos="fade-up" className="textAboutMe">
          <div className="lead">Hello, My name is </div>
          <h2>Md Irshad</h2>
          <div className="bio">
            <p>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a href="/">my blog</a> and regularly <a href="/">speak</a> at various web conferences and meetups. Want to know I may help your protect? Check out my project <a href="/">case studies</a> and <a href="/">resume</a>. </p>
          </div>
          <a href="/" className="hireme-btn">Hire me</a>
        </div>
      </div>
    </div>
  </div>
)

export default About;