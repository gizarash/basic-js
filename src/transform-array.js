const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) 
  {
    throw new Error('Not array');
  }

  let result = [];
  for(i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string' && arr[i].substr(0,2) === '--') continue;
    
    if(arr[i-1]) {
      if(arr[i-1] === '--discard-next') {
        continue;
      } else if(arr[i-1] === '--double-next') {
        result.push(arr[i], arr[i]);
      } else {
        result.push(arr[i]);
      }
    } else {
      result.push(arr[i]);
    }

    if(arr[i+1]) {
      if(arr[i+1] === '--discard-prev') {
        if(arr[i-1] && arr[i-1] === '--discard-next') {
          continue;
        } else {
          result.pop()
        }
      } else if(arr[i+1] === '--double-prev') {
        if(arr[i-1] && arr[i-1] === '--discard-next') {
          continue;
        } else {
          result.push(arr[i]);
        }
      }
    }
  }
  return result;
};
