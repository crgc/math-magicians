import React, { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress() {
    const {
      value, calculator, onCalculate, onKeyPress, /* eslint-disable-line react/prop-types */
    } = this.props;

    try {
      const updatedCalculator = calculate(calculator, value);
      const output = this.getCalculatorOutput(updatedCalculator);

      onCalculate(updatedCalculator, value);
      onKeyPress(output);
    } catch (err) {
      onKeyPress(`ERR: ${err.message}`);
      onCalculate({}, 'AC');
    }
  }

  getCalculatorOutput = (calculator) => {
    let output = calculator.next;
    if (output === null) {
      output = calculator.total;
    }

    if (output === null) {
      output = '0';
    }

    return output;
  }

  isOperation() {
    const { operations, value } = this.props; /* eslint-disable-line react/prop-types */
    return operations.includes(value); /* eslint-disable-line react/prop-types */
  }

  render() {
    let className = 'Key';
    const { value } = this.props; /* eslint-disable-line react/prop-types */

    if (this.isOperation()) {
      className += ' bg-orange';
    } else if (value === '0') {
      className += ' big-zero';
    }

    return (
      <div role="button" className={className} onClick={this.handleKeyPress}>{ value }</div>  /* eslint-disable-line */
    );
  }
}

Key.propsType = {
  value: PropTypes.string.isRequired,
  operations: PropTypes.array.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onCalculate: PropTypes.func.isRequired,
  calculator: PropTypes.objectOf(PropTypes.string).isRequired,
};

Key.defaultProps = {
  operations: ['÷', '+', '-', '=', 'x'],
};

export default Key;
