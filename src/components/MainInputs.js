import React, { Component } from 'react'

export default class MainInputs extends Component {
  render() {
    return (
      <div className="main-section valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              
              <div className="input-field">
                <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                <label for="first_name">Enter Amount</label>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
