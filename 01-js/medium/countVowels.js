/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelCount = 0;
  const stringLower = str.toLowerCase();

  const stringSplit = stringLower.split("");

  for (let i = 0; i < stringSplit.length; i++) {
    if (
      stringSplit[i] == "a" ||
      stringSplit[i] == "e" ||
      stringSplit[i] == "i" ||
      stringSplit[i] == "o" ||
      stringSplit[i] == "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
