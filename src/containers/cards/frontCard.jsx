import React from 'react';


const ListItem = ({text}) => (
  <li><i className="fa fa-check"></i><span className="name">{text}</span></li>
)

export default class FrontCard extends React.Component{
    render(){
        return(
				<div className="frontend-card card">
					<div className="card-content">
						<div className="card-head">
							<i className="fa fa-laptop"></i>
						</div>
						<div className="card-body">
							<h2>Frontend</h2>
							<div className="column">
								<ul className="list-style">
									<ListItem text="React/Vue/Angular" />
									<ListItem text="HTML/CSS/SCSS/LESS" />
									<ListItem text="Webpack/Grunt/Gulp" />
									<ListItem text="JavaScript" />
									<ListItem text="Node.js" />
								</ul>
							</div>
						</div>
					</div>
				</div>
        )
    }
}