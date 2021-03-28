const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if ( typeof activity !=='string' || isNaN(parseFloat(activity))
      || parseFloat(activity) <= 0 || parseFloat(activity) > MODERN_ACTIVITY) {
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY / (+activity)) * HALF_LIFE_PERIOD) / 0.693);
};
