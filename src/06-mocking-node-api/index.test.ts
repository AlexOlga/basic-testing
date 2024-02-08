// Uncomment the code below and write your tests
import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();
    doStuffByTimeout(callback, 100);
    expect(setTimeout).toBeCalledWith(callback, 100);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const timeout = 1000;

    doStuffByTimeout(callback, timeout);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(timeout);

    expect(callback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');
    const callback = jest.fn();
    doStuffByInterval(callback, 100);
    expect(setInterval).toBeCalledWith(callback, 100);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callback = jest.fn();
    const timeout = 1000;
    doStuffByInterval(callback, timeout);
    jest.advanceTimersByTime(2 * timeout);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here

    const pathToFile = 'file.txt';
    const join = jest.spyOn(path, 'join').mockReturnValue(pathToFile);
    await readFileAsynchronously(pathToFile);
    expect(join).toBeCalledWith(__dirname, pathToFile);
    jest.unmock('path');
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const pathToFile = 'file.txt';
    const result = await readFileAsynchronously(pathToFile);
    expect(result).toBeNull();
    jest.unmock('fs');
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const pathToFile = 'file.txt';
    const fileContent = 'Hello';
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(fsPromises, 'readFile')
      .mockReturnValue(Promise.resolve(fileContent));
    const result = await readFileAsynchronously(pathToFile);
    await expect(result).toBe(fileContent);
    jest.unmock('fs');
  });
});
