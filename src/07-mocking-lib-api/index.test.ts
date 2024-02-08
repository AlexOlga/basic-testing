// Uncomment the code below and write your tests
// import axios from 'axios';
// import { throttledGetDataFromApi } from './index';

jest.mock('axios');

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');
  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    /* const createMock = jest.spyOn(axios, 'create');
    //createMock.mockReturnValue({ get: jest.fn() });
    //jest.spyOn(axios.create(), 'get');
    await throttledGetDataFromApi('/test');
    expect(createMock).toBeCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });*/
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    /* const getMock = jest.spyOn(axios, 'get');
    await throttledGetDataFromApi('/test');
    expect(getMock).toHaveBeenCalledWith('/test');*/
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
