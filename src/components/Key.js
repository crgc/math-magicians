import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Key = (props) => {
  const getCalculatorOutput = (calculator) => {
    let output = calculator.next;
    if (output === null) {
      output = calculator.total;
    }

    if (output === null) {
      output = '0';
    }

    return output;
  };

  const handleKeyPress = () => {
    const {
      value, calculator, onCalculate, onKeyPress, /* eslint-disable-line react/prop-types */
    } = props;

    try {
      const updatedCalculator = calculate(calculator, value);
      const output = getCalculatorOutput(updatedCalculator);

      onCalculate(updatedCalculator, value);
      onKeyPress(output);
    } catch (err) {
      onKeyPress(`ERR: ${err.message}`);
      onCalculate({}, 'AC');
    }
  };

  const isOperation = () => {
    const { operations, value } = props; /* eslint-disable-line react/prop-types */
    return operations.includes(value); /* eslint-disable-line react/prop-types */
  };

  let className = 'Key';
  const { value } = props; /* eslint-disable-line react/prop-types */

  if (isOperation()) {
    className += ' bg-orange';
  } else if (value === '0') {
    className += ' big-zero';
  }

  return (
    <div role="button" className={className} onClick={handleKeyPress}>{ value }</div>  /* eslint-disable-line */
  );
};

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
