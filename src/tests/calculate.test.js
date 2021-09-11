import calculate from '../logic/calculate';

describe('returns default calculator data object', () => {
  test('calculates AC operation', () => {
    const calculator = {
      total: 10,
      next: '',
      operation: '+',
    };

    const updatedCalculator = calculate(calculator, 'AC');
    expect(updatedCalculator).toEqual({ total: 0, next: '', operation: '' });
  });
});

describe('returns updated calculator data object', () => {
  test('adds 1 + 1 to equal 2', () => {
    let calculator = calculate({}, '1');
    calculator = calculate(calculator, '+');
    calculator = calculate(calculator, '1');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '2', next: '', operation: '' });
  });

  test('substracts 1 - 1 to equal 0', () => {
    let calculator = calculate({}, '1');
    calculator = calculate(calculator, '-');
    calculator = calculate(calculator, '1');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '0', next: '', operation: '' });
  });

  test('multiplies 2 x 2 to equal 4', () => {
    let calculator = calculate({}, '2');
    calculator = calculate(calculator, 'x');
    calculator = calculate(calculator, '2');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '4', next: '', operation: '' });
  });

  test('multiplies 2.5 x 2 to equal 5', () => {
    let calculator = calculate({}, '2');
    calculator = calculate(calculator, '.');
    calculator = calculate(calculator, '5');
    calculator = calculate(calculator, 'x');
    calculator = calculate(calculator, '2');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '5', next: '', operation: '' });
  });

  test('divides 4 ÷ 2 to equal 2', () => {
    let calculator = calculate({}, '4');
    calculator = calculate(calculator, '÷');
    calculator = calculate(calculator, '2');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '2', next: '', operation: '' });
  });

  test('divides 1 ÷ 0 to equal NaN', () => {
    let calculator = calculate({}, '1');
    calculator = calculate(calculator, '÷');
    calculator = calculate(calculator, '0');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: 'NAN', next: '', operation: '' });
  });

  test('performs mod operation on 9 % 2, to equal 1', () => {
    let calculator = calculate({}, '9');
    calculator = calculate(calculator, '%');
    calculator = calculate(calculator, '2');
    calculator = calculate(calculator, '=');

    expect(calculator).toEqual({ total: '1', next: '', operation: '' });
  });

  test('performs +/- operation on 1, to equal -1', () => {
    let calculator = calculate({}, '1');
    calculator = calculate(calculator, '+/-');

    expect(calculator).toEqual({ next: '-1' });
  });

  test('returns 0. for .', () => {
    const calculator = calculate({}, '.');
    expect(calculator).toEqual({ total: '0.' });
  });

  test('returns final result of 5 x 2 calculation, to equal 10', () => {
    const calculator = calculate({ total: 5, next: '2', operation: 'x' }, '=');
    expect(calculator).toEqual({ total: '10', next: '', operation: '' });
  });

  test('returns empty object on =', () => {
    const calculator = calculate({}, '=');
    expect(calculator).toEqual({});
  });
});
