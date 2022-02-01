const feedbackFormEl = document.querySelector(".feedback-form");
const emailInputEl = document.querySelector('input');
const messageTextareaEl = document.querySelector('textarea');
const submitButtonEl = document.querySelector('button');
let localEmail = localStorage.getItem("feedback-form-state-email");
let localMessage = localStorage.getItem("feedback-form-state-message");
emailInputEl.value = localEmail;
messageTextareaEl.value = localMessage;
const emailInputSend = (event) => {
  event.preventDefault();
  console.log(event.currentTarget.value);
  localStorage.setItem("feedback-form-state-email", `${event.currentTarget.value}`);
  localEmail = localStorage.getItem("feedback-form-state-email");
}
const messageTextareaSend = (event) => {
  event.preventDefault();
  localStorage.setItem("feedback-form-state-message", `${event.currentTarget.value}`)
  localMessage = localStorage.getItem("feedback-form-state-message");
}
const submitButtonSend = (event) => {
  event.preventDefault();
  const objectEmailMessage = {
  email: localEmail,
  message: localMessage
}
  let jsonObjectEmailMessage = JSON.stringify(objectEmailMessage);
  localStorage.setItem("feedback-form-state", jsonObjectEmailMessage);
  let stringObjectEmailMessage = localStorage.getItem("feedback-form-state");
  let localObjectEmailMessage = JSON.parse(stringObjectEmailMessage);
  console.log(localObjectEmailMessage);
  emailInputEl.value = "";
  messageTextareaEl.value = ""; 
}
emailInputEl.addEventListener('input', emailInputSend);
messageTextareaEl.addEventListener('input', messageTextareaSend);
feedbackFormEl.addEventListener("submit", submitButtonSend);
