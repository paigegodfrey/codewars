/*
Given a string of space separated numbers, return the highest and lowest number

Notes:
- All numbers are valid, no need to validate them
- There will always be at least one number in the input string
- Output string must be two numbers separated by a single space and highest number
is first
*/

// O(n) time
// O(n) space
const highAndLow = numbers => {
  let numbersArr = numbers.split(' ');

  let highest = -Infinity;
  let lowest = Infinity;

  for (let num of numbersArr) {
    num = Number(num);
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
  }

  return `${highest} ${lowest}`;
}
