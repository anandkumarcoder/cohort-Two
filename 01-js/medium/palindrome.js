/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(string) {
  // return true;
const cleanString = string.toLowerCase()

const stringWithoutPunctuation = cleanString.replace(/[^\w\s]|_/g, '');

const stringWithoutSpaces = stringWithoutPunctuation.replace(/\s/g, '');
console.log("string without spaces " + stringWithoutSpaces);


  let listOfChars = stringWithoutSpaces.split("");
  console.log("from listofChars "  + listOfChars);


    var reverseList = listOfChars.reverse();


    reversedString = reverseList.join("");

    console.log( "from reversedString " +reversedString);
    //return reversedString;

    if (stringWithoutSpaces == reversedString) {
      return true
    } else {
      return false
    }
}


// console.log(isPalindrome("Mon"));
isPalindrome('race car')
module.exports = isPalindrome;

/* 
expect(isPalindrome('race car')).toBe(true);
isPalindrome('Able, was I ere I saw Elba!')
    > 48 |              ).toBe(true);
*/
