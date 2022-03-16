const getCount = str => {
  if (!str || typeof str !== "string") {
    return 'error - must input valid string';
  }

  let result = 0;
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) result++;
      console.log(vowels[j]);
      continue;
    }
  }

  return result;
}

// getCount('abcdef') => 2
