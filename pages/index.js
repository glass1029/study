const { odd, even } = require('./var');
const checkNumber = require('./func');

const checkStringOddOrEven = (str) => {
  if (str.length % 2){
    return odd;
  }
  return even;
}

console.log(`num은 ${checkNumber(12)}입니다.`);