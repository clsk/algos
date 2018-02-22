"use strict";
import {hasDuplicates} from '../src/duplicates2d';

describe('Given an array find the duplications in the same column', () => {
  test('Simple 2D array', () => {
    const matrix = [
      ['Tom', 'Dick', 'Harry'],
      ['Bob', 'Tom', 'Gerrard'],
      ['Mary', 'Dick', 'Sashidhar'],
      ['Mary', 'James', 'Julian']
    ];

    expect(hasDuplicates(matrix)).toEqual([['Mary'], ['Dick'], []]);
  });
});