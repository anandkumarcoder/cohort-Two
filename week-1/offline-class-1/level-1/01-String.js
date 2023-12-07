// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
//getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  // target is the word we want the index of 
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
  console.log("Index of last element:", str.lastIndexOf(target));
}
//findIndexOf("Hello World", "World");
//findIndexOf("Hello World World", "World"); // if element is present twice and i want the index of the last element

//findIndexOf("Hello World", "Rahul"); // if we want to find out the index of  some element which is not present  it will show  index -1  as output

// if you wan tot find out index of second "world"


/* function findIndexOfNthWord(str,target,occurrenceNumber) {
  const wordsArray = str.split(" ")
  let count = 0;
  let index = -1;

  for(let i =0; i < wordsArray.length; i++){
console.log("word before entering if condition" + wordsArray[i]);
    if(wordsArray[i] === target){

      console.log("word After entering if condition" + wordsArray[i]);
      count++

console.log("value of i " + i);
      if (count === occurrenceNumber) {
        index = i
        break
      }
      
    }
    console.log("value of index after if condition " + index);
  }
  console.log("after loop " + index);


}

findIndexOfNthWord("Hello World World", "World",3) */



// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
//findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
// getSlice("Hello World", 0, 5); //includes 0 upto 5th(5th is not included)

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end)); // here end is length number which is included
}
// getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
// replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
// splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());// only trims the extra space in the starrting and in the end and not in between
}
// trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
// toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
//toLower("Hello World");
