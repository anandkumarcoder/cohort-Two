// Revision

// callback function

function square(n) {
  return n * n;
}

function sumofSomething(a, b, callbfn) {
  let value1 = callbfn(a);
  let value2 = callbfn(b);

  return value1 + value2;
}

let ans = sumofSomething(1, 2, square);

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

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});

console.log("done");

//fs.write() is for writing a file

function putCopyRightToFile(cb){
    fs.readFile("a.txt", "utf-8", function (err, data) {
      data = data + " copy right 2020 Anand kumar"

      fs.writeFile("a.txt", function(){
        cb()
      })
      });
}


putCopyRightToFile(function () {
    console.log("copyright has been put");
})


setTimeout(() => {
    console.log("First hi");
    setTimeout(()=>{
        console.log("inside the secondone");
    },2000)
}, 1000);