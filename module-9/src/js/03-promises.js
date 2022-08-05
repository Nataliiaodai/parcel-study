const submitButton = document.querySelector('button[type="submit"]');
const amount = document.querySelector('input[name="amount"]');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
/*
function createPromise (position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return  new Promise((resolve, reject) => {

        for (let i = 0; i < position; i += 1) {

            setTimeout(() => {
                if (shouldResolve) {
                    resolve(({position, delay}) => {
                        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
                    })
                } else {
                    reject(({position, delay}) => {
                        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
                    }, delay);
                }
            });
        }
    });

}*/

function onClick() {
    // let delay = firstDelay.value;
    // console.log('delay=' + delay);

    let pos = amount.value;
    console.log('position=' + pos);

    // let step = delayStep.value;
    // console.log('step=' + step);

    // console.log('tmp1111111111111');

}



submitButton.addEventListener('click', onClick);
