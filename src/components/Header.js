import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="output-pill">
                <span className="output-numbers">${this.props.canadianValue}</span>
                <span className="denom">CAD</span>
              </div>
              <div className="output-pill">
                <span className="output-numbers">${this.props.mexicanValue}</span>
                <span className="denom">MXN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
