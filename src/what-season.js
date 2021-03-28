const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const timesOfYear = [
    'spring',
    'summer',
    'autumn',
    'winter'
  ];
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if(date instanceof Date) {
    if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
      throw new Error();
    }
    
    let month = date.getMonth();
    if(month < 2 || month === 11) {
      return timesOfYear[3];
    } else if(month < 5) {
      return timesOfYear[0];
    } else if(month < 8) {
      return timesOfYear[1];
    } else {
      return timesOfYear[2];
    }
  } else {
    throw new Error();
  }
};
