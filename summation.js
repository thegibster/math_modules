// use strict
// summation returns to summation of an integer.
const summation = (num) => {
  if (typeof(num) === 'number'){
    try {
      //Base cases
      if (num <= 0) return 0;
      if(num === 0) return 1;
      // The recursive call
      return num + summation(num - 1);
    }
    catch (err) {
      return err;
    }
  } else {
      return 'Not A number';
    }
}
