//calculator variables
const numberButtons = document.querySelectorAll('.btn-number')
const operatorButtons = document.querySelectorAll('.btn-operator')
const clearButton = document.querySelector('.btn-clear')
const display = document.querySelector('.calculator-display')
const equalsButton = document.querySelector('.btn-equals')
let operandOne = null
let operandTwo = null
let operator = ""
let displayData = ""
let result = null
//operate function
function reset() {
    operandOne = null
    operandTwo = null
    operator = ""
    return;
}

function operate(operateOne, operateTwo) {
    if (operator == "+") {
        return addValues(operateOne, operateTwo);
    }
    else if (operator == "-") {
        return subtractValues(operateOne, operateTwo);
    }
    else if (operator == "*") {
        return multiplyValues(operateOne, operateTwo);
    }
    else if (operator == "/") {
        if (operateTwo == 0) {
            return "STOP NOW"
        } else {
        return divideValues(operateOne, operateTwo).toFixed(2);
        }
    }
}


//evaluation functions
function addValues(inputOne, inputTwo) {
    return (inputOne + inputTwo);
}

function subtractValues(inputOne, inputTwo) {
    return (inputOne - inputTwo);
}

function multiplyValues(inputOne, inputTwo) {
    return (inputOne * inputTwo)
}

function divideValues(inputOne, inputTwo) {
    return (inputOne / inputTwo)
}
//display functions
numberButtons.forEach(e => {
    e.addEventListener('click', function () {
        if (display.textContent == "+" || display.textContent == "-" || display.textContent == "*" || display.textContent == "/") {
            display.textContent = ""
        } else if (display.textContent == result) {
            display.textContent = ""
        }
           
        display.textContent += e.textContent
        displayData = display.textContent
    })
})
operatorButtons.forEach(e => {
    e.addEventListener('click', function () {
        if (display.textContent == "") {
            display.textContent = "ERROR!"
            reset();
            return;
        }
        else if (display.textContent != "" && operandOne != null) {
            operandTwo = display.textContent
            result = operate(parseInt(operandOne), parseInt(operandTwo))
            display.textContent = result
            operandOne = display.textContent
            operandTwo = null
            operator = e.textContent
            return;

        } else if (operandOne === null) {
            operator = e.textContent
            operandOne = display.textContent;
            displayData = ""
            display.textContent = e.textContent;
            return;
        }
        display.textContent += e.textContent
        displayData = display.textContent
    })
})
clearButton.addEventListener('click', function () {
    reset();
    display.textContent = ""
    displayData = ""
})
equalsButton.addEventListener ('click', function () {
    operandTwo = display.textContent
    result = operate(parseInt(operandOne), parseInt(operandTwo))
    display.textContent = result
    operandOne = null;
    operandTwo = null;
    return;

})