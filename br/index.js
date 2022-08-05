const firstNumber = document.querySelector('input[name="first-number"]');
const secondNumber = document.querySelector('input[name="second-number"]');
const additionButton = document.querySelector('button[name="addition"]');
const subtractionButton = document.querySelector('button[name="subtraction"]');

const additionFunction = (event) => {
    event.preventDefault();
    addF(firstNumber, secondNumber);
};

const subtractionFunction = (event) => {
    event.preventDefault();
    substrF(firstNumber, secondNumber);
};


function addF() {
    let addResult = Number(firstNumber.value) + Number(secondNumber.value);
     document.querySelector('output[name="result"]').innerHTML = `${addResult}`;
};

function substrF() {
    let SubstrResult = Number(firstNumber.value) - Number(secondNumber.value);
    document.querySelector('output[name="result"]').innerHTML = `${SubstrResult}`;
};

additionButton.addEventListener('click', additionFunction);
subtractionButton.addEventListener('click', subtractionFunction);

// const resultField = document.querySelector('.result');
// console.log(firstNumber)
// console.log(secondNumber)
// console.log(additionButton)
// console.log(subtractionButton)
// console.log(resultField.value)
// let firstNumberValue = firstNumber.value
// let secondNumberValue = secondNumber.value
// let n1 = Number(firstNumber.value)
// let n2 = Number(secondNumber.value)