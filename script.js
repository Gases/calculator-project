//Button queries
var hiddenNumber, hiddenOperator;
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
    screen.textContent = ''
    enableDecimal();
}));

equalsButton.addEventListener('click', function () {
    firstNumber = hiddenNumber;
    secondNumber = parseFloat(screen.textContent);
    operator = hiddenOperator;
    operations(firstNumber, secondNumber, operator);
});

clearButton.addEventListener('click', function() {
    screen.textContent = '';
    enableDecimal();
});

function enableDecimal() { //Disables the decimal button after one use
    parseFloat(screen.textContent) % 1 !== 0 ? numberButton[10].disabled = true
    : numberButton[10].disabled = false;
}

function operations(firstNumber, secondNumber, operator) {
    screen.textContent = '';

    switch (operator) {
        case 'plus':
            screen.textContent += `${firstNumber + secondNumber}`;
            break;
        case 'minus':
            screen.textContent += `${firstNumber - secondNumber}`;
            break;
        case 'multi':
            screen.textContent += `${firstNumber * secondNumber}`;
            break;
        case 'divide':
            screen.textContent += `${firstNumber / secondNumber}`;
            break;
    }

    equalsPressed = true;
}