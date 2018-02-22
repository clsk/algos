"use strict";
import {rearrenge} from '../src/rearrange';

describe('Given an object with letters as keys and numbers as values return a string with list of the keys as lower-case and upper-case separated by comma. ie: cC,aA,bB', () => {
  test('Simple input', () => {
    const input = {
      a: 5,
      b: 4,
      c: 7
    }

    expect(rearrenge(input)).toEqual('cC,aA,bB');
  });
});
