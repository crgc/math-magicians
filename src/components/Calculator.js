import { useState } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [displayOutput, setDisplayOutput] = useState('0');

  const updateDisplay = (newDisplayOutput) => {
    setDisplayOutput(newDisplayOutput);
  };

  return (
    <div className="Calculator">
      <Display value={displayOutput} />
      <Keyboard onKeyPress={updateDisplay} />
    </div>
  );
};

export default Calculator;
