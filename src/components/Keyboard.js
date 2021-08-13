import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

class Keyboard extends Component { /* eslint-disable-line react/prefer-stateless-function */
  constructor(props) {
    super(props);
    this.state = {
      calculatorObject: {},
    };
    this.onCalculate = this.onCalculate.bind(this);
  }

  onCalculate(newCalculatorObject) {
    this.setState({
      calculatorObject: newCalculatorObject,
    });
  }

  render() {
    const { keyValues, onKeyPress } = this.props; /* eslint-disable-line react/prop-types */
    const keys = keyValues.map((keyValue) => { /* eslint-disable-line */
      return <Key key={keyValue} value={keyValue} onKeyPress={onKeyPress} calculator={this.state.calculatorObject} onCalculate={this.onCalculate}/>; /* eslint-disable-line */
    });

    return (
      <div className="Keyboard">
        { keys }
      </div>
    );
  }
}

Keyboard.propsType = {
  keyValues: PropTypes.array.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  keyValues: ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='],
};

export default Keyboard;
