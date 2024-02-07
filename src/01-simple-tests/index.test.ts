// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Add,
    });
    expect(result).toEqual(4);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Subtract,
    });
    expect(result).toEqual(3);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 3,
      b: 2,
      action: Action.Multiply,
    });
    expect(result).toEqual(6);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 6,
      b: 2,
      action: Action.Divide,
    });
    expect(result).toEqual(3);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 6,
      b: 2,
      action: 'plus',
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 6,
      b: 'one',
      action: Action.Exponentiate,
    });
    expect(result).toBeNull();
  });
});
