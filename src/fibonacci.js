"use strict";

let memoized = new Map();

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else if (memoized.has(n)) {
    return memoized.get(n);
  } else {
    let result = fibonacci(n - 1) + fibonacci(n - 2);
    memoized.set(n, result);
    return result;
  }
}

module.exports = {fibonacci};