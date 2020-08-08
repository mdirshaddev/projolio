import React from 'react';


const ListItem = ({text}) => (
  <li><i className="fa fa-check"></i><span className="name">{text}</span></li>
)

export default class OtherCard extends React.Component{
  render(){
    return(
    <div className="others-card card">
      <div className="card-content">
        <div className="card-head">
          <i className="fa fa-wrench"></i>
        </div>
        <div className="card-body">
          <h2>Others</h2>
          <div className="column">
            <ul className="list-style">
              <ListItem text="DevOps" />
              <ListItem text="Unit testing" />
              <ListItem text="UX/Wireframing" />
              <ListItem text="Adobe XD/Figma" />
              <ListItem text="WordPress/Netlify" />
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}