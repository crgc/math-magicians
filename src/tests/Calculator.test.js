import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorContainer from '../components/CalculatorContainer'

it('Calculator renders correctly', () => {
  const tree = renderer
    .create(<CalculatorContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});