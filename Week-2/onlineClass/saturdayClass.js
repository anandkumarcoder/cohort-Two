// Revision

// callback function

/* function square(n) {
  return n * n;
} */

/* function sumofSomething(a, b, callbfn) {
  let value1 = callbfn(a);
  let value2 = callbfn(b);

  return value1 + value2;
}

let ans = sumofSomething(1, 2, square); */

//console.log(ans);
/* 
console.log('Hi')
function onDone (){
console.log("click the button")
}

setTimeout(onDone , 2000)

console.log("welcome to loop") */
// asynchronous
// SetTimeout and readFile
// readfile() is function given by node js

/* console.log('Hi')
function onDone (){
console.log("click the button")
}

setTimeout(onDone , 2000)

console.log("welcome to loop") */

// reading a file

/* const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});

console.log("done"); */

//fs.write() is for writing a file

/* function putCopyRightToFile(cb){
    fs.readFile("a.txt", "utf-8", function (err, data) {
      data = data + " copy right 2020 Anand kumar"

      fs.writeFile("a.txt", function(){
        cb()
      })
      });
} */


/* putCopyRightToFile(function () {
    console.log("copyright has been put");
}) */


/* setTimeout(() => {
    console.log("First hi");
    setTimeout(()=>{
        console.log("inside the secondone");
    },2000)
}, 1000); */

// Promises

// Aprroach 1

function myOwnSetTimeout(fn, duration){
  setTimeout(fn, duration)
  // here set time is taking its argument from the function's parameter
  // here cb is taken as inout 
}

// myOwnSetTimeout(function () {
//   console.log("hi there");
// },3000)

// approach 2 - with promise , doing the same of above 

function myOwnSetTimeout2(duration) {
  let p = new Promise((resolve) => {
    // 
     setTimeout(resolve,duration) // detailed of this is added below 

   /*  setTimeout(() => {
      resolve()
    }, duration); */
  })

  return p
}


//console.log(myOwnSetTimeout2(2000)); //Promise { <pending> }
myOwnSetTimeout2(5000)
.then(function () {
  console.log("log the first thing");
})

// then is for consumption of the promise
// benfits of promise - promise chaining , async, await 