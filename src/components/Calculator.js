import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component { /* eslint-disable-line react/prefer-stateless-function */
  render() {
    return (
      <div className="Calculator">
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
