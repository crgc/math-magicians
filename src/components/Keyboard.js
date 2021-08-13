import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

class Keyboard extends React.Component { /* eslint-disable-line react/prefer-stateless-function */
  render() {
    const { keyValues } = this.props; /* eslint-disable-line react/prop-types */
    const keys = keyValues.map((keyValue) => <Key key={keyValue} value={keyValue} />); /* eslint-disable-line */

    return (
      <div className="Keyboard">
        { keys }
      </div>
    );
  }
}

Keyboard.propsType = {
  keyValues: PropTypes.array.isRequired,
};

Keyboard.defaultProps = {
  keyValues: ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='],
};

export default Keyboard;
