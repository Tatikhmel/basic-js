const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = [...n.toString()];
  console.log(array);

  let min = Math.min(...array);
  let minToString = String(min);
  console.log(minToString);

  let copyOfArray = [...array];
  console.log(copyOfArray);

  let a = copyOfArray.splice(array.indexOf(minToString), 1);
  let b = array.splice(0, 1);
  console.log(a);
  console.log(b);

  if (copyOfArray.join("") > array.join("")) {
    return Number(copyOfArray.join(""));
  } else {
    return Number(array.join(""));
  }
}

console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
