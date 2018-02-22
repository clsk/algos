"use strict";
import {fibonacci} from '../src/fibonacci';

describe('Find the fibonacci number of n iterations', () => {
  test('0', () => {

    expect(fibonacci(0)).toEqual(0);
  });

  test('1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('2', () => {

    expect(fibonacci(2)).toEqual(1);
  });

  test('3', () => {
    expect(fibonacci(3)).toEqual(2);
  });

  test('4', () => {
    expect(fibonacci(4)).toEqual(3);
  });

  test('5', () => {
    expect(fibonacci(5)).toEqual(5);
  });

  test('6', () => {
    expect(fibonacci(6)).toEqual(8);
  });

  test('7', () => {
    expect(fibonacci(7)).toEqual(13);
  });

  test('8', () => {
    expect(fibonacci(8)).toEqual(21);
  });

  test('9', () => {
    expect(fibonacci(9)).toEqual(34);
  });

  test('50', () => {
    expect(fibonacci(50)).toEqual(12586269025);
  });
});