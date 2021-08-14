import { useState } from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const Keyboard = (props) => {
  const [calculatorObject, setCalculatorObject] = useState({});

  const onCalculate = (newCalculatorObject) => {
    setCalculatorObject(newCalculatorObject);
  };

  const { keyValues, onKeyPress } = props; /* eslint-disable-line react/prop-types */
  const keys = keyValues.map((keyValue) => { /* eslint-disable-line */
    return <Key key={keyValue} value={keyValue} onKeyPress={onKeyPress} calculator={calculatorObject} onCalculate={onCalculate}/>; /* eslint-disable-line */
  });

  return (
    <div className="Keyboard">
      { keys }
    </div>
  );
};

Keyboard.propsType = {
  keyValues: PropTypes.array.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

Keyboard.defaultProps = {
  keyValues: ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='],
};

export default Keyboard;
