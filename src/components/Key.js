import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  isOperation() {
    const { value } = this.props; /* eslint-disable-line react/prop-types */
    const operations = ['÷', '+', '-', '=', 'x'];

    return operations.includes(value);
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
      <div className={className}>{ value }</div>
    );
  }
}

Key.propsType = {
  value: PropTypes.string.isRequired,
};

export default Key;
