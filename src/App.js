import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MainInputs from './components/MainInputs';

import './css/app.scss'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      canadianValue: '',
      mexicanValue: '',
      mexToCanRate: 0.071,
      canToMexRate: 14.07
    };

    // need to bind to use this.state
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
  }

  handleChangeInputValue(event) {
    // check for only numbers
    var reg = /(^[\d]+.\.[\d]{1,2}$)|(^[\d]+$)|(^[\d]+\.$)/;
    var valid = reg.test(event.target.value);
    // console.log(valid);
    if( valid ) {
      // grab values
      const inputValue = event.target.value;
      const canadianValue = inputValue * this.state.mexToCanRate;
      const mexicanValue = inputValue * this.state.canToMexRate;
      this.setState({
        inputValue: inputValue,
        canadianValue: canadianValue,
        mexicanValue: mexicanValue
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header canadianValue={this.state.canadianValue} />
        <MainInputs
          inputValue={this.state.inputValue} 
          handleChangeInputValue={this.handleChangeInputValue}
        />
        <Footer mexicanValue={this.state.mexicanValue} />
      </div>
    )
  }
}


