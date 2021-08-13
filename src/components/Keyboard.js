import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

class Keyboard extends Component { /* eslint-disable-line react/prefer-stateless-function */
  render() {
    const { keyValues, onKeyPress } = this.props; /* eslint-disable-line react/prop-types */
    const keys = keyValues.map((keyValue) => <Key key={keyValue} value={keyValue} handleKeyPress={onKeyPress} />); /* eslint-disable-line */

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
