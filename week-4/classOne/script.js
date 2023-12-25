function populateDiv() {
    //accessing DOM

    const firstValue = document.querySelector("#firstNumber").value
    const secondValue = document.querySelector("#secondNumber").value
     const element = document.querySelector("#final-sum");
// https://sum-server.100xdevs.com/sum?a=8&b=5


// hitting the server to do the calcluation
/* fetch("https://sum-server.100xdevs.com/sum?a=" + firstValue + "&b=" + secondValue).then(function(response){
    console.log(response);
    response.text() //this is also promise
    .then(function(ans){
       // console.log(ans);
        element.innerHTML = ans

    })
})
    */
   


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