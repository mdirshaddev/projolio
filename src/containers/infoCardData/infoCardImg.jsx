import React from 'react'
import i from '../../images/abs.jpg';

export default class InfoCardImg extends React.Component {
  render() {
    return (
      <div className="img-side">
        <img src={i} className="blue-box" alt="some random pic"></img>
      </div>
    )
  }
}
