import React from 'react';

//logo
import LogoList from './logoList';
//navlinks

import NavLinkList from './navLinks';

//toggle button for mobile and tablet mode only
import Toggler from './toggleButton';

class HeaderLayout extends React.Component{
  constructor(props){
  super(props);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggleClick = () => {
    this.setState({isOpen: !this.state.isOpen})
    console.log('I am Clicked.');
  }
  render(){
    return(
      <header className={this.state.isOpen ? "header showNav": "header" }>
        <div className="container-fluid" >
          <nav className={this.state.isOpen ? "nav showNav" : "nav"}>
            <div className="logo">
              <LogoList />
              <Toggler toggleBtn={this.toggleClick} />
            </div>
            <div className={this.state.isOpen ? "navLink showNav" : "navLink"}>
              <NavLinkList />
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
export default HeaderLayout;