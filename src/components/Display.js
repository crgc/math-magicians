import PropTypes from 'prop-types';

const Display = (props) => (
  <div className="Display">{props.value}</div> /* eslint-disable-line */
);

Display.propsType = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
