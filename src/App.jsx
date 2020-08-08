import React from 'react';
import homePage from './contents/homePage';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <Route path="/" component={homePage} />
      </Router>
    )
  }
}

