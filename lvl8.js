// Your task is to create functionisDivideBy (or is_divide_by)
// to check if an integer number is divisible by each out of two arguments.

let isDivideBy = (number, a, b) => {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
};
