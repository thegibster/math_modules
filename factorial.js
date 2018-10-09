// use strict
// Factorial returns to summation of an integer.
const factorial = (num) => {
  if (typeof(num) === 'number'){
    try {
      //Base cases
      if(num === 0) return 1;
      // The recursive call
      return num * factorial(num - 1);
    }
    catch (err) {
      return err;
    }
  } else {
      return 'Not A number';
    }
}

module.exports.factorial = factorial;
// console.log(factorial(5));
// console.log(factorial(10));
