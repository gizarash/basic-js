const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  initCounter = 0;
  maxDepth = 1;
  curDepth = 1;
  calculateDepth(arr) {
    if(this.initCounter === 0) {
      this.maxDepth = 1;
    }
    this.initCounter++;
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        this.curDepth++;
        this.calculateDepth(arr[i]);
        if (this.curDepth > this.maxDepth) {
          this.maxDepth = this.curDepth;
        }
        this.curDepth--;
      }
    }
    this.initCounter--;
    return this.maxDepth;
  }
};