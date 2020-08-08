import React from 'react';

const ListItem = ({text}) => (
  <li><i className="fa fa-check"></i><span className="name">{text}</span></li>
)

export default class BackCard extends React.Component{
    render(){
        return(
        <div className="backend-card card">
          <div className="card-content">
            <div className="card-head">
              <i className="fa fa-database"></i>
            </div>
            <div className="card-body">
              <h2>Backend</h2>
              <div className="column">
                <ul className="list-style">
                  <ListItem text="MongoDB" />
                  <ListItem text="MySQL/PostgresSQL" />
                  <ListItem text="Python/Django" />
                  <ListItem text="PHP" />
                  <ListItem text="Ruby/Rails" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        )
    }
}