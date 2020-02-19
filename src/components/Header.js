import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="output-pill">
                <span>${this.props.canadianValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
