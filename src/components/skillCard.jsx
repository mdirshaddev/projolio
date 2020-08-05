import React from 'react';

const ListItem = ({text}) => (
  <li><i className="fa fa-check"></i> <span className="name">{text}</span></li>
)

const FrontCard = () => (
  <div className="frontend-card card">
    <div className="card-head">
      <i className="fa fa-laptop"></i>
    </div>
    <div className="card-body">
      <h2>Frontend</h2>
      <ul className="list-style">
        <ListItem text="React/Vue/Angular" />
        <ListItem text="HTML/CSS/SCSS/LESS" />
        <ListItem text="Webpack/Grunt/Gulp" />
        <ListItem text="JavaScript" />
        <ListItem text="Node.js" />
      </ul>
    </div>
  </div>
)

const BackCard = () => (
  <div className="backend-card card">
    <div className="card-head">
      <i className="fa fa-database"></i>
    </div>
    <div className="card-body">
      <h2>Backend</h2>
      <ul className="list-style">
        <ListItem text="MongoDB" />
        <ListItem text="MySQL/PostgresSQL" />
        <ListItem text="Python/Django" />
        <ListItem text="PHP" />
        <ListItem text="Ruby/Rails" />
      </ul>
    </div>
  </div>
)

const OtherCard = () => (
  <div className="others-card card">
    <div className="card-head">
      <i className="fa fa-wrench"></i>
    </div>
    <div className="card-body">
      <h2>Others</h2>
      <ul className="list-style">
        <ListItem text="DevOps" />
        <ListItem text="Unit testing" />
        <ListItem text="UX/Wireframing" />
        <ListItem text="Adobe XD/Figma" />
        <ListItem text="WordPress/Netlify" />
      </ul>
    </div>
  </div>
)

export default class skillCard extends React.Component{
    render(){
        return(
            <div className="skill-section">
              <section>
                <div className="overview">
                  <h2>Skills Overview</h2>
                  <p className="detail-overview">
                  I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="#resume">Check out my online resume.</a>
                  </p>
                </div>
                <div className="skills-row">
                  <FrontCard />
                  <BackCard />
                  <OtherCard />
                </div>
              </section>
            </div>
        )
    }
}