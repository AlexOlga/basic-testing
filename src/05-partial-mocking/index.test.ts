// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    mockOne: jest.fn(() => 1),
    mockTwo: jest.fn(() => 2),
    mockThree: jest.fn(() => 3),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    const consoleLogSpy = jest.spyOn(console, 'log');
    mockOne();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    mockTwo();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    mockThree();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    consoleLogSpy.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const consoleLogSpy = jest.spyOn(console, 'log');
    unmockedFunction();
    expect(consoleLogSpy).toBeCalledWith('I am not mocked');
    consoleLogSpy.mockRestore();
  });
});
