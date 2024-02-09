// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  getBankAccount,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    expect(acc.getBalance()).toEqual(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    expect(() => acc.withdraw(1100)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    const acc2 = getBankAccount(1000);

    expect(() => acc.transfer(1100, acc2)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    expect(() => acc.transfer(100, acc)).toThrowError();
  });

  test('should deposit money', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    acc.deposit(100);
    expect(acc.getBalance()).toEqual(1100);
  });

  test('should withdraw money', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    acc.withdraw(100);
    expect(acc.getBalance()).toEqual(900);
  });

  test('should transfer money', () => {
    // Write your test here
    const acc = getBankAccount(1000);
    const acc2 = getBankAccount(1000);
    acc.transfer(100, acc2);
    expect(acc.getBalance()).toEqual(900);
    expect(acc2.getBalance()).toEqual(1100);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const acc = getBankAccount(1000);
    const mockFetchBalance = jest.fn().mockResolvedValue(500);
    acc.fetchBalance = mockFetchBalance;
    const balance = await acc.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const acc = getBankAccount(1000);
    const initialBalance = acc.getBalance();
    const mockFetchBalance = jest.fn().mockResolvedValue(500);
    acc.fetchBalance = mockFetchBalance;
    await acc.synchronizeBalance();
    expect(acc.getBalance()).not.toEqual(initialBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const acc = getBankAccount(1000);
    const mockFetchBalance = jest.fn().mockResolvedValue(null);
    acc.fetchBalance = mockFetchBalance;

    await expect(acc.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
