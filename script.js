//Global variables
var numberOne, numberTwo, operation, result;
var equalsPressed = false;
var operationPressed = false;

//Button queries
let numberButton = document.querySelectorAll('.number-button').forEach(button => button.addEventListener('click', numberEntry));
let operationButton = document.querySelectorAll('.operation-button').forEach(button => button.addEventListener('click', operationEntry));
let equalButton = document.querySelector('.equals-button').addEventListener('click', pressEqual);
let clearButton = document.querySelector('#clear').addEventListener('click', clearScreen);
let backButton = document.querySelector('#back').addEventListener('click', backspace);

//Screen query
let screen = document.querySelector('.screen');

function numberEntry(e) {
    if (equalsPressed) {
        screen.textContent = '';
    }

    let text = e.target.innerText;
    screen.textContent += text;

    if (!operationPressed) {
        numberOne = parseFloat(screen.textContent);
    } else {
        numberTwo = parseFloat(screen.textContent);
    }
}

function backspace() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function operationEntry(e) {
    if (numberOne && numberTwo) {
        if (result % 1 !== 0) screen.textContent += result.toFixed(5);
        else screen.textContent += result;
        performOperation();
    }
    
    operation = e.target.id;
    operationPressed = true;
    screen.textContent = '';
}

function pressEqual() {
    equalsPressed = true;
    performOperation();

    if (result % 1 !== 0) screen.textContent += result.toFixed(5);
    else screen.textContent += result;
}

function clearScreen() {
    screen.textContent = '';
    numberOne = 0;
    numberTwo = 0;
    result = 0;
    operation = '';
    equalsPressed = false;
    operationPressed = false;
}

function performOperation(e) {    
    screen.textContent = '';

    switch (operation) {
        case 'plus':
            result = numberOne + numberTwo;
            break;
        case 'minus':
            result = numberOne - numberTwo;
            break;
        case 'multi':
            result = numberOne * numberTwo;
            break;
        case 'divide':
            numberTwo === 0 ? screen.textContent += `Can't do that!`
            : result = numberOne / numberTwo;
            break;
    }

    numberOne = result;
}