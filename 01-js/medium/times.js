/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
// Two methods to calculate time - performance method and time method, I have used performance method
    const startTime = performance.now(); // Get the start timestamp

    // const beforeStarting = new Date().getTime();


    for (let i = 0; i < 1000000000; i++) {
        
        n = n + i
        //console.log(n);
        
    }

    const endTime = performance.now(); // Get the end timestamp

    const timeTaken = endTime - startTime; // Calculate time taken in milliseconds

    /* const afterEnding = new Date().getTime();
    const timeDifference = afterEnding - beforeStarting;
    console.log(`Total Time it took to execute this function is :- ${timeDifference} ms`); */



    console.log(`Sum: ${n}`);
    console.log(`Time taken: ${timeTaken} milliseconds`);
    return n;
}

calculateTime(1000000000)

// sum for 1-100 ---> Sum: 4950 and Time taken: 0.1680999994277954 milliseconds

//Sum from 1-100000 ---> /* Sum: 4999950000 Time taken: 3.497699998319149 milliseconds */

// Sum from 1-1000000000 --->   /*   Sum: 499999999067109000 Time taken: 888.0449000000954 milliseconds */



/* extra stuff
// const date = new Date().getTime()
const date = new Date()
//const currentTime = `${date.getHours()}hrs ${date.getMinutes()}min ${date.getSeconds()}secs`
console.log(date);
//console.log(currentTime);

// const startTime = performance.now();
// console.log(startTime);
 */