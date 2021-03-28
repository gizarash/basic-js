const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {
  let resultArr = [];

  if (typeof str === 'undefined') {
    str = '';
  } else if (str === null) {
    str = 'null';
  } else if (typeof str === 'object') {
    str = str;
  } else {
    str = str.toString();
  }

  let addition = null;
  if (typeof option.addition === 'undefined') {
    addition = '';
  } else if (option.addition === null) {
    addition = 'null';
  } else if (typeof option.addition === 'object') {
    addition = option.addition;
  } else {
    addition = option.addition.toString();
  }

  let repeatTimes = option.repeatTimes || 1;
  let additionRepeatTimes = option.additionRepeatTimes || 1;
  let separator = option.separator || '+';
  let additionSeparator = option.additionSeparator || '|';
  let addStr = '';

  if(addition) {
    let addArr = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      addArr.push(addition);
    }
    addStr = addArr.join(additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(str + addStr);
  }

  return resultArr.join(separator);
};
  