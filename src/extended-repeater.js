const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (!options) return str;

    var repeat = (value, count, separator) => {
        return Array(count).fill(value).join(separator);
    };

    var value = str;
    if ('addition' in options) {
        value += repeat(options.addition + '', options.additionRepeatTimes, options.additionSeparator || '|');
    }

    return repeat(value, options.repeatTimes, options.separator || '+');
}

module.exports = {
    repeater
};