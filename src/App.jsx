import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <br/>
        {/* <Route path="/" exact component={} /> */}
      </Router>
    )
  }
}

