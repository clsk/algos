'use strict';
/**
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.[1] For example, the word anagram can be rearranged into "naga ram".
 * Given 2 words, say if a word is an anagram of the other
 */

import {isAnagram} from '../src/anagram';
describe('Anagram', () => {
  test('1 letter word true (c, c)', () => {
    let word1 = 'c';
    let word2 = 'c';

    expect(isAnagram(word1, word2)).toEqual(true);
  });

  test('1 letter word false (c, a)', () => {
    let word1 = 'c';
    let word2 = 'a';

    expect(isAnagram(word1, word2)).toEqual(false);
  });

  test('3 letter words true (cad, acd)', () => {
    let word1 = 'cad';
    let word2 = 'acd';

    expect(isAnagram(word1, word2)).toEqual(true);
  });

  test('3 letter words false (cad, acs)', () => {
    let word1 = 'cad';
    let word2 = 'acs';

    expect(isAnagram(word1, word2)).toEqual(false);
  });

  test('9 letter words true (asdfghjkl, alskdjfgh)', () => {
    let word1 = 'asdfghjkl';
    let word2 = 'alskdjfgh';

    expect(isAnagram(word1, word2)).toEqual(true);
  });

  test('9 letter words false (asdfghjkl, alskdjfnh)', () => {
    let word1 = 'asdfghjkl';
    let word2 = 'alskdjfnh';

    expect(isAnagram(word1, word2)).toEqual(false);
  });

});