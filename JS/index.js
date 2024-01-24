console.clear;

const showAnswerButton = document.querySelector('[data-js= "button"]');
const HiddenAnswer = document.querySelector('[data-js="card-answer-box"]');

showAnswerButton.addEventListener("click", () => {
  HiddenAnswer.classList.toggle("hidden");
});
