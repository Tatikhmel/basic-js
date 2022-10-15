const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    const arrIsArr = arr.filter((e) => Array.isArray(e));
    if (arrIsArr.length > 0) {
      for(let i of arrIsArr){
        let count = 1;
        count += this.calculateDepth(i);
        if (count > sum) sum = count;
      }
    }
    return sum;
  }
}

module.exports = {
  DepthCalculator
};
