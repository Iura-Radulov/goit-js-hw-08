const throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const messageEl = formEl.querySelector("textarea");
let formData = {};

formEl.addEventListener('input', throttle(onTextareaInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    const savedData = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(savedData));
    localStorage.removeItem("feedback-form-state");  
    formData = {};
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
}

function populateTextarea() {
    const savedMessage = localStorage.getItem("feedback-form-state");    
    if (savedMessage) {
    const savedData = JSON.parse(savedMessage);
    if (savedData.email) {
        emailEl.value = savedData.email;
    };
    if (savedData.message) {
        messageEl.value = savedData.message;
    };
} 
}