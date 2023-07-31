//calculator variables
const numberButtons = document.querySelectorAll('.btn-number')
const operatorButtons = document.querySelectorAll('.btn-operator')
const clearButton = document.querySelector('.btn-clear')
let operandOne = null
let operandTwo = null
let operator = ""
//operate function
function operate (operator, operandOne) {
    if (operator = "+") {
        return addValues (operandOne, operandTwo);
    }
    else if (operator = "-") {
        return subtractValues (operandOne, operandTwo);
    }
    else if (operator = "*") {
        return divideValues (operandOne, operandTwo);
    }
    else if (operator = "/") {
        return divideValues (operandOne, operandTwo);
    }
}


//evaluation functions
function addValues (inputOne, inputTwo) {
 return (inputOne + inputTwo);
}

function subtractValues (inputOne, inputTwo) {
    return (inputOne - inputTwo);
}

function multiplyValues (inputOne, inputTwo) {
    return (inputOne * inputTwo)
}

function divideValues (inputOne, inputTwo) {
    return (inputOne/inputTwo) 
}
//display function
numberButtons.forEach(e => {
    e.addEventListener('click', function () {   
    })
})
