// Revision

// callback function

function square(n) {
    return n*n
}

function sumofSomething(a,b, callbfn){
    let value1 = callbfn(a);
    let value2= callbfn(b)

    return value1 + value2
}

let ans = sumofSomething(1,2,square)

console.log(ans);