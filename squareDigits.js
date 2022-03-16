/*
Square every digit of an integer and return the result as an integer.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
*/

const numValid = num => {
  return num && typeof num === 'integer';
}

// O(n) time
// O(n) space
const squareDigits = num => {
  if (!numValid) return 'error - must input valid integer';

  let squares = [];
  const numString = num.toString();

  for (let digit of numString) {
    squares.push(Math.pow(Number(digit), 2));
  }

  let result = Number(squares.join(''));
  return result;
}
