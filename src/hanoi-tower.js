const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    const ONE_HOUR_IN_SECONDS = 3600;
    let minTurns = Math.pow(2, disksNumber) - 1;
    let minSeconds = minTurns / (turnsSpeed / ONE_HOUR_IN_SECONDS);
    return { turns: minTurns, seconds: Math.floor(minSeconds) };
}

module.exports = {
    calculateHanoi
};