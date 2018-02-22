"use strict";

function isAnagram(word1, word2) {
  let allLetters = new Map();
  for (let i = 0; i < word1.length; i++) {
    if (allLetters.has(word1[i])) {
      allLetters.set(word1[i], allLetters.get(word1[i])+1);
    } else {
      allLetters.set(word1[i], 1);
    }
  }

  for (let j = 0; j < word2.length; j++) {
    if (allLetters.has(word2[j])) {
      if (allLetters.get(word2[j]) === 1) {
        allLetters.delete(word2[j]);
      } else {
        allLetters.set(word2[j], allLetters.get(word2[j])-1);
      }
    } else {
      return false;
    }
  }

  return allLetters.size === 0;
}

module.exports = {isAnagram};