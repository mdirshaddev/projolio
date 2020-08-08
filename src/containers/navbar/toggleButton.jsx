import React, { Component } from 'react'

export default class ToggleButton extends Component {
  render() {
    return (
      <div className="show-menu-btn">
        <input type="checkbox" id="chk"/>
        <label htmlFor="chk" className="show-btn">
          <i className="fa fa-bars"></i>
        </label>
        <label htmlFor="chk" className="hide-btn">
          <i className="fa fa-times"></i>
        </label>
      </div>
    )
  }
}
