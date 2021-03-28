const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      value = '( )';
    } else if (typeof value === 'boolean') {
      value = value ? '( true )' : '( false )';
    } else if (typeof value === 'function') {
      value = '( function() {} )';
    } else if (value === null) {
      value = '( null )';
    } else {
      value = '( ' + value + ' )';
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof this.chain[position-1] === 'undefined') {
      this.chain = [];
      throw new Error('Not exists');
    } else {
      this.chain.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let stringChain = this.chain.join('~~');
    this.chain = [];
    return stringChain;
  }
};

module.exports = chainMaker;
