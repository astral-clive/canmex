import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col s12">

              <div className="output-pill">
                <span>${this.props.mexicanValue}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
