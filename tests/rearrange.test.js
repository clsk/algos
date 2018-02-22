"use strict";
import {rearrenge} from '../src/rearrange';

describe('Given an object with letters as keys and numbers as values', () => {
  test('Simple input', () => {
    const input = {
      a: 5,
      b: 4,
      c: 7
    }

    expect(rearrenge(input)).toEqual('cC,aA,bB');
  });
});
