/* 
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const stringValid = str => {
  return str && typeof str === 'string';
}

// O(n) time
// O(1) space
const getCount = str => {
  if (!stringValid) return 'error - must input valid string';

  let result = 0;
  let vowels = 'aeiou';

  for (let char of str) {
    if (vowels.includes(char)) result++;
  }

  return result;
}

// without using includes method
// O(n) time
// O(1) space
const getCountAlt = str => {
  if (!stringValid(str)) return 'error - must input valid string';

  let result = 0;
  let vowels = 'aeiou';

  for (let char of str) {
    for (let vowel of vowels) {
      if (char === vowel) {
        result++;
        continue;
      }
    }
  }
  
  return result;
}
