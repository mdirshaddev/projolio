import React from 'react';
import Navbar from './components/navbar';
import CardInfo from './components/InfoCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <Route path="/about" component={CardInfo} />
      </Router>
    )
  }
}

