const firstNumber = document.querySelector('input[name="first-number"]');
const secondNumber = document.querySelector('input[name="second-number"]');
const additionButton = document.querySelector('button[name="addition"]');
const subtractionButton = document.querySelector('button[name="subtraction"]');
const output = document.querySelector('output[name="result"]');

const additionFunction = (event) => {
    event.preventDefault();
    output.innerHTML = `${Number(firstNumber.value) + Number(secondNumber.value)}`;
};
additionButton.addEventListener('click', additionFunction);


const subtractionFunction = function(event) {
    event.preventDefault();
    output.innerHTML = `${Number(firstNumber.value) - Number(secondNumber.value)}`;
};
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