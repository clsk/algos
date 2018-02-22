function rearrenge(x) {
  let invertedObject = {};
  let keys = [];
  for (let key in x) {
    invertedObject[x[key]] = key;
    keys.push(x[key]);
  }

  keys.sort((lhs, rhs) => rhs - lhs);

  const allStrings = keys.map((k) => invertedObject[k].toLowerCase() + invertedObject[k].toUpperCase());
  return allStrings.join(',');
}

module.exports = {rearrenge};