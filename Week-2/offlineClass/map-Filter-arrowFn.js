// Arrow function
// main difference is the use of this keyword- which cannot be used in the arrow function

//given an array. multiply each element with 2

const arr = [1,2,3,4]

// dumb method 

let newArr = []

for (let i = 0; i < arr.length; i++) {
newArr.push(arr[i] * 2) 
    
}

// console.log(newArr);

// console.log(arr);

// better solution

function transform (i){
    return i * 2
}

// const ans = arr.map(transform)
const ans = arr.map((item) => {
    return item  * 2
    
})

console.log(ans);  // [ 2, 4, 6, 8 ]