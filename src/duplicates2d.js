"use strict";

/**
 * Given an array find the duplications in the same column
 * @param {array[array]} input 2D array of strings
 */
function hasDuplicates(input) {
  let result = [];

  const rowLen = input.length;
  const columnLen = input[0].length;
  for (let column = 0; column < columnLen; ++column) {
    let columnResults = new Set();
    let set = new Set();
    for (let row = 0; row < rowLen; ++row) {
      const element = input[row][column];
      if (set.has(element)) {
        columnResults.add(element);
      } else {
        set.add(element);
      }
    }
    result.push(Array.from(columnResults.values()));
  }

  return result;
}

module.exports = {hasDuplicates};
// rowLen: 4, columnLen: 3
// row = 0, column = 0: Tom
// row = 1, column = 0: Bob
// row = 2, column = 0: Mary
// row = 3, column = 0: Mary
// row = 0, column = 1: Dick
// row = 1, column = 1: Tom
// row = 2, column = 1: Dick
// row = 3, column = 1: James
// row = 0, column = 2: Harry
// row = 1, column = 2: Gerrard
// row = 2, column = 2: Sashidhar
// row = 3, column = 2: Julian