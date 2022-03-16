/*
Create a function that takes an integer as an argument and returns "Even"
for even numbers or "Odd" for odd numbers.
*/

const numValid = num => {
  return num && typeof num === 'integer';
}

// O(1) time
// O(1) space
const evenOrOdd = num => {
  if (!numValid) return 'error - must input valid integer';
  if (num % 2 === 0) return 'Even';
  return 'Odd';
}
