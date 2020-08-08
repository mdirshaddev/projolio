import React from 'react';
import FrontCard from '../containers/cards/frontCard';
import BackCard from '../containers/cards/backCard';
import OtherCard from '../containers/cards/otherCard';

export default class skillCard extends React.Component{
    render(){
        return(
            <div className="skill-section">
              <section>
                <div className="overview">
                  <h1>Skills Overview</h1>
                  <p className="detail-overview">
                  I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="#resume">Check out my online resume.</a>
                  </p>
                </div>
                <div className="skills-row">
                  <div className="row">
                    <FrontCard />
                    <BackCard />
                    <OtherCard />
                  </div>
                </div>
              </section>
            </div>
        )
    }
}