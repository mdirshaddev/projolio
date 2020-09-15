import React from 'react';

const Toggler = props => {

  return(
  <button className="toggle toggle-btn" onClick={props.toggleBtn}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </button>
)}

export default Toggler;