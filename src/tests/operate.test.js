import operate from '../logic/operate';

describe('Adition tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Number(operate(1, 2, '+'))).toBe(3);
  });

  test('adds 1 + 2 to not equal 4', () => {
    expect(Number(operate(1, 2, '+'))).not.toBe(4);
  });
});

describe('Subtraction tests', () => {
  test('subtract 5 - 2 to equal 2', () => {
    expect(Number(operate(5, 2, '-'))).toBe(3);
  });

  test('subtract 6 - 2 to not equal 5', () => {
    expect(Number(operate(6, 2, '-'))).not.toBe(5);
  });
});

describe('Division tests', () => {
  test('divide 6 ÷ 2 to equal 4', () => {
    expect(Number(operate(6, 2, '÷'))).toBe(3);
  });

  test('divide 6 ÷ 2 to not equal 5', () => {
    expect(Number(operate(6, 2, '÷'))).not.toBe(5);
  });
  test('divide 2 ÷ 0 to  equal NAN', () => {
    expect(Number(operate(2, 0, '÷'))).toBe(NaN);
  });
});

describe('Multiplication tests', () => {
  test('mulitply 6 x 2 to equal 12', () => {
    expect(Number(operate(6, 2, 'x'))).toBe(12);
  });

  test('multiply 6 x 2 to not equal 5', () => {
    expect(Number(operate(6, 2, 'x'))).not.toBe(5);
  });
});

describe('Modulus tests', () => {
  test('mod 6 of 4 to equal', () => {
    expect(Number(operate(6, 4, '%'))).toBe(2);
  });

  test('mod 6 of 4  to not equal', () => {
    expect(Number(operate(6, 4, '%'))).not.toBe(5);
  });
});
