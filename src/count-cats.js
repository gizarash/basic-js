const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let total = 0;
  backyard.forEach((line) => {
    total = line.reduce((count, e) => {
      return e === "^^" ? ++count : count;
    }, total);
  });
  return total;
};
