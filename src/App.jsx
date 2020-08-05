import React from 'react';
import Navbar from './components/navbar';
import CardInfo from './components/InfoCard';
import skillCard from './components/skillCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <Route path="/" component={CardInfo} />
        <Route path="/" component={skillCard} />
      </Router>
    )
  }
}

