import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              
              <div className="input-field">
                <input placeholder="Mexican" disabled id="mexican_output" type="text" className="validate"
                  value={'$' + this.props.mexicanValue + ' (MXN)'} />
                <label for="first_name">Mexican Peso</label>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
