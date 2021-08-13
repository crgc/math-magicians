import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component { /* eslint-disable-line react/prefer-stateless-function */
  render() {
    const { value } = this.props; /* eslint-disable-line react/prop-types */

    return (
      <div className="Display">{value}</div>
    );
  }
}

Display.propsType = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
