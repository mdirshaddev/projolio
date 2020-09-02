import React from 'react';
import HomePage from './containers/homepage';

import './scss/main.scss';

class App extends React.Component{
  render(){
    return(
      <>
      <div className="mainLayout">
        <HomePage />
      </div>
      </>
    )
  }
}

export default App;