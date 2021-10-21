//Button queries
var hiddenNumber, hiddenOperator, result;
let equalsPressed = false;
let numberButton = document.querySelectorAll('.number-button');
let operationButton = document.querySelectorAll('.operation-button');
let equalsButton = document.querySelector('.equals-button');
let clearButton = document.querySelector('#clear');
let backButton = document.querySelector('#back');

//Screen query
let screen = document.querySelector('.screen');

//Button functions
numberButton.forEach(button => button.addEventListener('click', e => {
    if(equalsPressed) {
        screen.textContent = '';
        screen.textContent += e.target.innerText;
        equalsPressed = false;
     } else { 
        screen.textContent += e.target.innerText;
     }
    enableDecimal(); 
}));

operationButton.forEach(button => button.addEventListener('click', e => {
    hiddenNumber = parseFloat(screen.textContent);
    hiddenOperator = e.target.id;
    if (result) {
        secondNumber = parseFloat(screen.textContent);
        operations(result,secondNumber,hiddenOperator);
    }
    screen.textContent = ''
    enableDecimal();
}));

equalsButton.addEventListener('click', function () {
    firstNumber = hiddenNumber;
    secondNumber = parseFloat(screen.textContent);
    operator = hiddenOperator;
    operations(firstNumber, secondNumber, operator);
});

clearButton.addEventListener('click', clearDisplay);

function enableDecimal() { //Disables the decimal button after one use
    parseFloat(screen.textContent) % 1 !== 0 ? numberButton[10].disabled = true
    : numberButton[10].disabled = false;
}

function operations(firstNumber, secondNumber, operator) {
    screen.textContent = '';
    console.log(firstNumber, secondNumber, operator);

    switch (operator) {
        case 'plus':
            result = firstNumber + secondNumber;
            screen.textContent += `${(firstNumber + secondNumber).toFixed(3)}`;
            break;
        case 'minus':
            result = firstNumber - secondNumber;
            screen.textContent += `${(firstNumber - secondNumber).toFixed(3)}`;
            break;
        case 'multi':
            result = firstNumber * secondNumber;
            screen.textContent += `${(firstNumber * secondNumber).toFixed(3)}`;
            break;
        case 'divide':
            if (secondNumber === 0) {
            screen.textContent = `Can't do that!`;
            } else {
                result = firstNumber / secondNumber;
                screen.textContent += `${(firstNumber / secondNumber).toFixed(3)}`
            }
            break;
    }

    equalsPressed = true;
}

function clearDisplay() {
    screen.textContent = '';
    hiddenNumber = 0;
    hiddenOperator = '';
    enableDecimal();
}

clearDisplay;