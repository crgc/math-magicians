import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress() {
    const { value, handleKeyPress } = this.props; /* eslint-disable-line react/prop-types */
    if (!this.isOperation()) {
      handleKeyPress(value);
    }
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
  handleKeyPress: PropTypes.func.isRequired,
};

Key.defaultProps = {
  operations: ['÷', '+', '-', '=', 'x'],
};

export default Key;
