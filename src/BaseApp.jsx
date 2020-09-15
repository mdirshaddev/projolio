import React from 'react';

//animation on scroll library
import AOS from 'aos';

//animation on scroll css file
import 'aos/dist/aos.css';

// router import
import BaseRouter from './router';

//stateful component for my BaseApp component
class BaseApp extends React.Component{
  componentDidMount(){
    AOS.init({
      duration: 1500
    })
  }
  render(){
    return(
      <div className="Layout">
        <BaseRouter />
      </div>
    )
  }
}

export default BaseApp;