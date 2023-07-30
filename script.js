//calculator variables
let operandOne = 0
let operandTwo = 0
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

