import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//component loading
import HeaderLayout from './components/header/header';
import AboutPage from './containers/aboutPage';
import FooterLayout from './components/footer/footer';

const BaseRouter = () => (
  <>
  <Router>
    <HeaderLayout />
    <Route path="/about" exact component={AboutPage} />
    <FooterLayout />
  </Router>
  </>
)

export default BaseRouter;