
"use strict";
import {reverser} from '../src/reverser';

describe('reverse all words in a string, without reversing the whole string', () => {
  test('empty string', () => {
    expect(reverser('')).toEqual('');
  });

  test('Single word string', () => {
    expect(reverser('someword')).toEqual('drowemos');
  });

  test('2 word string', () => {
    expect(reverser('someword wording')).toEqual('drowemos gnidrow');
  });

  test('3 word string', () => {
    expect(reverser('someword wording another')).toEqual('drowemos gnidrow rehtona');
  });

  test('4 word string', () => {
    expect(reverser('someword wording another justfun')).toEqual('drowemos gnidrow rehtona nuftsuj');
  });
});
