import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              
              <div className="input-field">
                <input 
                  placeholder="Canadian" 
                  disabled 
                  id="canadian_output" 
                  type="text" 
                  className="validate"
                  value={'$' + (this.props.inputValue * 0.5) + ' (CAD)'}
                />
                <label for="first_name">Canadian Dollar</label>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
