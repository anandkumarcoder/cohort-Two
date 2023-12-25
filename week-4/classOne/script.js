





function populateDiv() {
    //accessing DOM

    const firstValue = document.querySelector("#firstNumber").value
    const secondValue = document.querySelector("#secondNumber").value
     const element = document.querySelector("#final-sum");
// https://sum-server.100xdevs.com/sum?a=8&b=5


// hitting the server to do the calcluation
fetch("https://sum-server.100xdevs.com/sum?a=" + firstValue + "&b=" + secondValue)
.then(function(response){
    console.log(response);
    response.text() //this is also promise
    .then(function(ans){
       // console.log(ans);
        element.innerHTML = ans

    })

}) // classic example of callback hell

   
   


    //console.log(element); // typeof element is an object

    // element.innerHTML = "hello World 2"
    // element.innerHTML = parseInt(firstValue) + parseInt(secondValue)
}

// Better way to do the above

async function populateDiv2(){
    const firstValue = document.querySelector("#firstNumber").value
    const secondValue = document.querySelector("#secondNumber").value
     const element = document.querySelector("#final-sum");

     const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + firstValue + "&b=" + secondValue )

     console.log(response);

     const ans = await response.text();
     element.innerHTML = ans

}

// initializing timer
let timeout ;
function debouncePopulate() {
    // delay the call to populateDiv until i've not been called for 100ms

    // and I've been called atleast once


    // how to cancel the clock
     clearTimeout(timeout) // immediately clock gets cancelled 
    // debounce needs to happen after the user stops typing. i.e when the user types again old timer needs to get cancelled and new setTimer will be called
    timeout = setTimeout(function(){
        populateDiv2()
    }, 1000)

     

   /*  // how to cancel the clock
    clearTimeout(timeout) // immediately clock gets cancelled 
    // debounce needs to happen after the user stops typing. i.e when the user types again old timer needs to get cancelled and new setTimer will be called */
}
