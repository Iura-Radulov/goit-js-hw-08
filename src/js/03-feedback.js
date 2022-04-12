const throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const messageEl = formEl.querySelector("textarea");
const formData = {};

formEl.addEventListener('input', throttle(onTextareaInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    const savedMessage = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(savedMessage));
    localStorage.removeItem("feedback-form-state");
    
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    if (savedMessage) {
        messageEl.value = savedMessage;
    }
}