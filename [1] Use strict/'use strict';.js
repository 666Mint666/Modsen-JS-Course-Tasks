'use strict';

function getVowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}



console.log(getVowelCount('Hello, World!')); // Output: 3
console.log(getVowelCount('JavaScript')); // Output: 3
