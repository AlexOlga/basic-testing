// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  {
    a: 5,
    b: 2,
    action: Action.Subtract,
    expected: 3,
  },
  {
    a: 3,
    b: 2,
    action: Action.Multiply,
    expected: 6,
  },
  {
    a: 6,
    b: 2,
    action: Action.Divide,
    expected: 3,
  },
  {
    a: 2,
    b: 3,
    action: Action.Exponentiate,
    expected: 8,
  },
  {
    a: 6,
    b: 2,
    action: 'plus',
    expected: null,
  },
  {
    a: 6,
    b: 'one',
    action: Action.Exponentiate,
    expected: null,
  },

  // continue cases for other actions
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)('should blah-blah', (obj) => {
    const { a, b, action, expected } = obj;
    const result = simpleCalculator({ a, b, action });
    expect(result).toEqual(expected);
  });

  // Consider to use Jest table tests API to test all cases above
});
