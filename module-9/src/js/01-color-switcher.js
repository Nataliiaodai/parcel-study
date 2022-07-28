
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const startButton = document.querySelector('button[data-start]');
// console.log(startButton)
let timerId;
startButton.addEventListener("click", () => {
// if ( startButton.classList.contains("isActive")){
//     return;
// }
//      startButton.classList.add("isActive");
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});

const stopButton = document.querySelector('button[data-stop]');
// console.log(stopButton)
stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    stopButton.disabled = true;
    startButton.disabled = false;
    // startButton.classList.remove("isActive");
});




