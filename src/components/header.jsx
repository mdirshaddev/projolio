import React from 'react';

const SocialLinks = ({linkRef, iconClass}) => (
  <li className="social-list-item">
    <a className="social-links" href={linkRef}><i className={iconClass}></i></a>
  </li>
)

const NavigationLinks = ({linkRef, text}) => (
  <li className="nav-list-item">
    <a href={linkRef} className="nav-links nav-links-hover">{text}</a>
  </li>
)

class Header extends React.Component{
  constructor(props){
    super(props);
    this.toggleBars = this.toggleBars.bind(this);
    this.state={
      active: false
    }
  }
  toggleBars = (e) =>{
    this.setState({
      active: !this.state.active
    })
  }
    render() {
      return (
        <>
          <header>
            <div className="background_blue">
              <div className="container-fluid">
                <nav className="navbar">
                  <ul className="social flex-row">
                    <SocialLinks linkRef="#twitter" iconClass="fa fa-twitter" />
                    <SocialLinks linkRef="linkedin" iconClass="fa fa-linkedin" />
                     <SocialLinks linkRef="#github" iconClass="fa fa-github" />
                    <SocialLinks linkRef="stack" iconClass="fa fa-stack-overflow" />
                    <SocialLinks linkRef="dribble" iconClass="fa fa-dribbble" />
                  </ul>
                  <div id={this.state.active ? "navigation_open" : "navigation"}>
                    <ul className={this.state.active ? "nav flex-column": "nav flex-row"}>
                      <NavigationLinks linkRef="#about" text="About" />
                      <NavigationLinks linkRef="resume" text="Resume" />
                      <NavigationLinks linkRef="projects" text="Projects" />
                      <NavigationLinks linkRef="blogs" text="Blogs" />
                      <li className="nav-list-item">
                        <a href="#knowmore" className="nav-links" id="hire">Hire Me</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="menu menu-show-btn">
                    <i onClick={this.toggleBars.bind(this)} className={this.state.active ? "fa fa-close" : "fa fa-bars"}></i>
                </div>
              </div>
            </div>
          </header>
        </>
      )
    }
}

export default Header;