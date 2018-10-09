// use strict
// Combination returns to summation of an integer.

const combination = (population, sample_size) => {
  if ((typeof(population) === 'number') && (typeof(sample_size) === 'number')){
    try {
      //Base cases
      if(population === 0) return 1;
      if(population === sample_size) return 1;

      // The recursive call
      return population * combination(population-1,sample_size);
    }
    catch (err) {
      return err;
    }
  } else {
      return 'Not A number';
    }
}

console.log(combination(8,5));

