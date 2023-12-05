/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {


  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();
  console.log(cleanStr1.length);

  

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");
  console.log(sortedStr1);
  console.log(sortedStr2);

  if (sortedStr1 === sortedStr2) {
    console.log(sortedStr1); 
    return true;
  } else {
    return false;
  }

}

module.exports = isAnagram;
