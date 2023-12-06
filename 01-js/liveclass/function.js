// function

// sum of two



// callbacks

/* function sum (num1, num2){
    let result = num1 + num2
    return result
} */  //original



function sum (num1, num2,callbackFn){
    let result = num1 + num2
    callbackFn(result) // this is same as writing displayResult(result)
}
function displayResult(data) {
    console.log("result of the sum is " + data);
}

function displayResultPassive(data) {
    console.log("sum's result is : " + data);
}


//onst ans = sum(1,2, displayResult)
//console.log(ans);




// solution 1
/* const functionOne = sum(1,2);
const functionTwo = displayResult(functionOne)
const functionThree = displayResultPassive(functionTwo)

console.log(functionThree); 

// THIS WAY WE ARE CALLING MULTIPLE FUNCTION MULTIPLE TIMES*/

function calculateSum() {
    return sum(10,20)
}

setTimeout(calculateSum , 3 *1000)