import React from 'react';
import i from '../images/trust.jpg';

export default class CardInfo extends React.Component{
    render(){
        return(
            <div className="customAboutCard">
              <div className="left-side">
                <div className="border-image">
                  <img src={i} alt="Random Image" />
                </div>
              </div>
              <div className="right-side">
                <div className="heading-text">
                  <h2>I'm <span className="nametext">Md Irshad</span></h2>
                  <p>FullStack Web Developer</p>
                </div>
                <div className="separator"></div>
                <table>
                  <thead>
                    <tr>
                      <th className="weight">Info</th>
                      <th className="distance">Data</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="weight">Age</td>
                        <td className="distance">22</td>
                      </tr>
                      <tr>
                        <td className="weight">Email</td>
                        <td className="distance">mdirshaddev@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="weight">Contact No</td>
                        <td className="distance">(+91) 7003450712</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <div className="box">
                <a href="https://github.com/mdirshaddev/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="https://www.facebook.com/mdirshaddev"><i className="fa fa-facebook"></i></a> 
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
              </div>
            </div>
        )
    }
}