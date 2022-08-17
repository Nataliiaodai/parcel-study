import Notiflix from 'notiflix';

document.querySelector(".form").addEventListener("submit", onClick);

function onClick(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    let amount = Number(formEl.amount.value);
    let delay = Number(formEl.delay.value);
    let step = Number(formEl.step.value);
    console.log(`amount=${amount} delay=${delay} step=${step} `)

    for (let i = 0; i <= amount; i += 1) {
        createPromise(i, delay)
            .then(({position, delay}) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
                console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)

            })
            .catch(({position, delay}) => {
                Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
                console.log(`❌ Rejected promise ${position} in ${delay}ms`)
            });
        delay += step;
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (shouldResolve) {
                resolve({position, delay})
            } else {
                reject({position, delay})
            }
        }, delay)
    })
}
