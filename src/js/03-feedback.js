import throttle from 'lodash.throttle';


// const form = document.querySelector('.feedback-form');
// console.log(form);
// form.addEventListener('input', saveData);
//
// const LOCALSTORAGE_KEY =  'feedback-form-state';
// const email = document.querySelector("input");
// // console.log(email)
// const message = document.querySelector("textarea");
// // console.log(message)
//
//
// let data = localStorage.setItem(LOCALSTORAGE_KEY, form.elements.value);
//  console.log(form.elements.value)
//
// // // updateOutput();
// //
// function saveData(evt) {
// //     evt.preventDefault();
// //     let saveDataObject = {};
// //
// //     // let data = localStorage.setItem(LOCALSTORAGE_KEY, form.elements.value);
// //     // console.log(messageData)
// //
// //     // updateOutput();
// //     // form.reset();
//      }
//
// form.elements.message.value
// form.elements.email.value
//
//  function updateOutput() {
//      let getMessageData = localStorage.getItem(LOCALSTORAGE_MESSAGE_KEY) || "";
//        console.log( getMessageData);
//        let getEmailData = localStorage.getItem(LOCALSTORAGE_EMAIL_KEY) || "";
//        console.log(getEmailData)
// }
//
//


const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactForm = document.querySelector('.feedback-form');
const formData = {};

const fillContactForm = form => {
    const formDataFromLocalStorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
    const formElements = form.elements;

    for (const key in formDataFromLocalStorage) {
        if (formDataFromLocalStorage.hasOwnProperty(key)) {
            formElements[key].value = formDataFromLocalStorage[key];
        }
    }
};

fillContactForm(contactForm);

const onContactFormChange = throttle(event => {
    const { target } = event;

    const contactFormValue = target.value;
    const contactFormValueName = target.name;

    formData[contactFormValueName] = contactFormValue;
    localStorage.setItem('formData', JSON.stringify(formData));
}, 500);


const submitFunc = event => {
    event.preventDefault();
    const { email, message } = event.target;

    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    }
    const obj = {
        email: contactForm.email.value,
        message: contactForm.message.value,
    };

    console.log(obj);
    event.currentTarget.reset();
    localStorage.removeItem('formData');
};

contactForm.addEventListener('submit', submitFunc);
 contactForm.addEventListener('input', throttle(onContactFormChange, 500));