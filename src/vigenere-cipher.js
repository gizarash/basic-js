const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isForward = true){
    this.isForward = isForward;
    this.initAlphabet();
  }
  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error('');
    }
    return this.process(message, key, true);
  }    
  decrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error('');
    }
    return this.process(message, key, false);
  }
  initAlphabet() {
    this.alphabet = [];
    const start = 65; // 'A'
    const end = 90;   // 'Z'
    for (let i = start; i <= end; i++) {
        this.alphabet.push(String.fromCharCode(i));
    }
  }
  process(message, key, encode) {
    
    message = this.isForward ? message.toUpperCase() : message.split('').reverse().join('').toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    return message.split('').map((e) => {
      let result = e;

      if(this.alphabet.indexOf(e) !== -1) {
        if(encode) {
          result = this.alphabet[(this.alphabet.indexOf(e) + this.alphabet.indexOf(key[count])) % this.alphabet.length];
        } else {
          result = this.alphabet[(this.alphabet.indexOf(e) + this.alphabet.length - this.alphabet.indexOf(key[count])) % this.alphabet.length];
        }
        count = (count + 1) % key.length;
      }
      
      return result;
    }).join('');
  }
}

module.exports = VigenereCipheringMachine;
