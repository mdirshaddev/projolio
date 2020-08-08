import React from 'react';
import SocialLinks from '../containers/navbar/socialLinks';
import RouteLink from '../containers/navbar/routeLink';
import ToggleButton from '../containers/navbar/toggleButton';


export default class Navbar extends React.Component{
    render(){
        return(
          <div className="header">
            <div className="holdings">
              <SocialLinks />
              <RouteLink />
              <ToggleButton />
            </div>
          </div>
        )
    }
}