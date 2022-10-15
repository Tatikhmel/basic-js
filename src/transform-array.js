const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 

    for(let i=0; i<arr.length; i++){
      if (arr[i] == "--double-next" && i == (arr.length - 1) || 
          arr[i] == "--double-prev" && i == 0 || 
          arr[i] == '--discard-next' && i == (arr.length - 1) || 
          arr[i] == "--discard-prev" && i == 0){
        continue
      }

      if (arr[i] == "--discard-next" && arr[i + 2] == "--double-prev"){
        arr.splice(i, 2);
        break
      }

        if (arr[i] == "--double-next") {
          result.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev") {
          result.push(arr[i - 1]);
        } else if (arr[i] == "--discard-prev") {
          result.pop();
        } else if (arr[i - 1] == "--discard-next") {
          result.push(arr[i + 1]);
        } else {
          result.push(arr[i]);
        }
    }
    return result;
  }

console.log(transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);

module.exports = {
  transform
};
