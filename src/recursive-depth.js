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
        let depth = 0;
        if (Array.isArray(arr)) {
            if (arr.length == 0) depth = 1;
            else {
                arr.forEach(item => {
                    let depthItem = 1;
                    depthItem += this.calculateDepth(item);
                    if (depthItem > depth) depth = depthItem;
                })
            }
        }
        return depth;
    }
}

module.exports = {
    DepthCalculator
};