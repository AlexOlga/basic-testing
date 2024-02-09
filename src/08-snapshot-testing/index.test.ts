// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    // Write your test here
    const elements = [1];
    const result = generateLinkedList(elements);

    expect(result).toStrictEqual({
      next: {
        next: null,
        value: null,
      },
      value: 1,
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const elements = [1, 2];
    const result = generateLinkedList(elements);
    expect(result).toMatchSnapshot();
  });
});
