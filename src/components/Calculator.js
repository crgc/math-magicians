import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component { /* eslint-disable-line react/prefer-stateless-function */
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.state = {
      displayOutput: '0',
    };
  }

  updateDisplay(newText) {
    this.setState({ displayOutput: newText });
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayOutput} /> { /* eslint-disable-line */ }
        <Keyboard onKeyPress={this.updateDisplay} />
      </div>
    );
  }
}

export default Calculator;
