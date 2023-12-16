/* const fs = require("fs");

fs.readFile("p.txt", "utf-8", function (err,data) {
    console.log(data);
})

console.log("first high");


let a=0
// for loop taking longer than reading the file but still for loop will be read first -> second high ->reading the file 
for (let i = 0; i < 100000; i++) {
    a++
    
}

console.log("second high"); */

// -----asynch function wrapped around fs readFile which takes call back (samething done using promise below)
const fs = require('fs');

// my own asynchronous function
/* function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone) */

// -------------Promises------------

/* const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    console.log("inside hkirat file");
  return new Promise(function(resolve) {
    console.log("inside promise");
    fs.readFile("p.txt", "utf-8", function(err, data) {
        console.log("before resolve");
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

// kiratsReadFile().then(onDone);

var a = kiratsReadFile()
console.log(a);
a.then(onDone)
 */

// ---------promise with setTimeout

function kiratsAsyncFunction() {
    
 let p = new Promise(function(resolve) {
   setTimeout(resolve, 5000)
  })

  return p
}

const value = kiratsAsyncFunction()
value.then(function () {
    console.log("hi there from async function");
})