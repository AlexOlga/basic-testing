// Uncomment the code below and write your tests
import axios, { AxiosInstance } from 'axios';

import { throttledGetDataFromApi } from './index';
jest.mock('axios');

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');
  return {
    __esModule: true,
    ...originalModule,
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const mockResponse = { data: 'data' };
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    const createMock = jest.spyOn(axios, 'create').mockImplementation(
      () =>
        ({
          get: getMock,
        } as unknown as AxiosInstance),
    );

    await throttledGetDataFromApi('/test');
    expect(createMock).toBeCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    const mockResponse = { data: 'data' };
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    jest.spyOn(axios, 'create').mockImplementation(
      () =>
        ({
          get: getMock,
        } as unknown as AxiosInstance),
    );

    await throttledGetDataFromApi('/test');
    expect(getMock).toHaveBeenCalledWith('/test');
  });

  test('should return response data', async () => {
    const mockResponse = { data: 'data' };
    const getMock = jest.fn().mockResolvedValue(mockResponse);
    jest.spyOn(axios, 'create').mockImplementation(
      () =>
        ({
          get: getMock,
        } as unknown as AxiosInstance),
    );

    const res = await throttledGetDataFromApi('/test');
    expect(res).toEqual('data');
  });
});
