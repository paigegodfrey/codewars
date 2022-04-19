/*
Write a function that takes a string and return a new string with all vowels
removed.

For example, the string "This website is for losers LOL!" would become "Ths 
wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

const stringValid = str => {
  return str && typeof str === 'string';
}

// O(n) time
// O(n) space
const disemvowelTrolls = str => {
  if (!stringValid) return 'error - must input valid string';

  let outputArr = [];
  let vowels = 'aeiouAEIOU';

  for (let char of str) {
    if (!(vowels.includes(char))) outputArr.push(char);
  }

  let result = outputArr.join('');
  return result;
}
