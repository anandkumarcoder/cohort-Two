function populateDiv() {
    //accessing DOM

    const firstValue = document.querySelector("#firstNumber").value
    const secondValue = document.querySelector("#secondNumber").value
    const element = document.querySelector("#final-sum");

    
    //console.log(element); // typeof element is an object

    // element.innerHTML = "hello World 2"
    element.innerHTML = parseInt(firstValue) + parseInt(secondValue)
}