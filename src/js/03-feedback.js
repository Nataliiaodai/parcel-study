import throttle from 'lodash.throttle';


const inputForm = document.querySelector('.feedback-form');
inputForm.addEventListener('input', saveFunction);
const LOCALSTORAGE_KEY = 'feedback-form-state';
const emailForm = inputForm.firstElementChild;
console.log(emailForm)
const messageForm = inputForm.lastElementChild;
console.log(messageForm)


function updateOutput() {
    emailForm.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
    messageForm.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}


updateOutput();

function saveFunction(evt) {
    evt.preventDefault();
    localStorage.setItem(LOCALSTORAGE_KEY, inputForm.elements.message.value);
    updateOutput();
    inputForm.reset();
}


// const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
// const contactForm = document.querySelector('.feedback-form');
// const formData = {};
//
// const fillContactForm = form => {
//     const formDataFromLocalStorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
//     const formElements = form.elements;
//
//     for (const key in formDataFromLocalStorage) {
//         if (formDataFromLocalStorage.hasOwnProperty(key)) {
//             formElements[key].value = formDataFromLocalStorage[key];
//         }
//     }
// };
//
// fillContactForm(contactForm);
//
// const onContactFormChange = throttle(event => {
//     const { target } = event;
//
//     const contactFormValue = target.value;
//     const contactFormValueName = target.name;
//
//     formData[contactFormValueName] = contactFormValue;
//     localStorage.setItem('formData', JSON.stringify(formData));
// }, 500);
//
//
// const submitFunc = event => {
//     event.preventDefault();
//     const { email, message } = event.target;
//
//     if (email.value === '' || message.value === '') {
//         return alert('Please fill in all the fields!');
//     }
//     const obj = {
//         email: contactForm.email.value,
//         message: contactForm.message.value,
//     };
//
//     console.log(obj);
//     event.currentTarget.reset();
//     localStorage.removeItem('formData');
// };
//
// contactForm.addEventListener('submit', submitFunc);
// contactForm.addEventListener('input', throttle(onContactFormChange, 500));