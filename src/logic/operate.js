import Big from 'big.js'; /* eslint-disable-line */

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    if (Big(0).eq(two)) {
      throw Error('Division by 0');
    } else {
      return one.div(two).toString();
    }
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
