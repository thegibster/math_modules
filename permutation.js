// use strict
// Combination returns to summation of an integer.

let {factorial} = require('./factorial');

const permutation = (population, sample_size) => {
  if (typeof(population) === 'number' && typeof(sample_size) === 'number' ){
    try {
      return factorial(population) / factorial(population - sample_size)
    }
    catch (err) {
      return err;
    }
  } else {
      return 'Not A number';
    }
}

console.log(permutation(8,5));

