import React from 'react';
import i from '../images/abs.jpg';

export default class CardInfo extends React.Component{
    render(){
        return(
          <div className="container">
            <div className="content">
              <div className="img-side">
                <img src={i} className="blue-box"></img>
              </div>
              <div className="info-side">
                <div className="intro">
                  Hello, my name is
                </div>
                <h1 className="fname">Md Irshad</h1>
                <div className="text-info">
                  <p>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a href="#">my blog</a> and regularly <a href="#">speak</a> at various web conferences and meetups. Want to know how I may help your project? Check out my project <a href="#">case studies</a> and <a href="#">resume.</a></p>
                </div>
                <a href="#" className="hire-btn">Hire Me</a>
              </div>
            </div>
          </div>
        )
    }
}