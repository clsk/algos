"use strict";
function reverseWord(word) {
  let str = '';
  for (let i = word.length-1; i > -1; --i) { // O(word.length)
    str += word[i];
  }

  return str;
}

/**
 * 
 * @param {string} input 
 */
function reverser(input) {
  input = input.trim(); // trim string
  if (input.length === 0) {
    return '';
  }

  let words = [];
  // basically implementing input.split(' ') manually
  let begin = 0, end = 0;
  for (;end < input.length; ++end) { // O(wordCount)
    if (input[end] === ' ') {
      words.push(reverseWord(input.substr(begin, end-begin)));
      begin = end + 1;
    }
  }

  // Handle last one
  words.push(reverseWord(input.substr(begin, end-begin)));
  return words.join(' '); 
}

module.exports = {reverser};