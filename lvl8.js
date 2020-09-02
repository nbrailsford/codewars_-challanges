// Your task is to create functionisDivideBy (or is_divide_by)
// to check if an integer number is divisible by each out of two arguments.

let isDivideBy = (number, a, b) => {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
};

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.

const arr = (n = 0) => [...Array(n).keys()];

console.log(arr(5));
