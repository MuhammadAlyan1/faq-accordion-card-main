let firstFaq = document.getElementById("first-faq");
let secondFaq = document.getElementById("second-faq");
let thirdFaq = document.getElementById("third-faq");
let fourthFaq = document.getElementById("fourth-faq");
let fifthFaq = document.getElementById("fifth-faq");

// first faq click event

firstFaq.addEventListener("click", displayFirstAnswer);

function displayFirstAnswer() {
  document
    .getElementById("first-faq-answer")
    .classList.toggle("display-answer");
  document.getElementById("first-faq-question").classList.toggle("flip-arrow");
  document
    .getElementById("first-faq-question")
    .classList.toggle("change-color");
}

// second faq click event

secondFaq.addEventListener("click", displaySecondAnswer);

function displaySecondAnswer() {
  document
    .getElementById("second-faq-answer")
    .classList.toggle("display-answer");
  document.getElementById("second-faq-question").classList.toggle("flip-arrow");
  document
    .getElementById("second-faq-question")
    .classList.toggle("change-color");
}

// third faq click event

thirdFaq.addEventListener("click", displayThirdAnswer);

function displayThirdAnswer() {
  document
    .getElementById("third-faq-answer")
    .classList.toggle("display-answer");
  document.getElementById("third-faq-question").classList.toggle("flip-arrow");
  document
    .getElementById("third-faq-question")
    .classList.toggle("change-color");
}

// fourth faq click event

fourthFaq.addEventListener("click", displayFourthAnswer);

function displayFourthAnswer() {
  document
    .getElementById("fourth-faq-answer")
    .classList.toggle("display-answer");
  document.getElementById("fourth-faq-question").classList.toggle("flip-arrow");
  document
    .getElementById("fourth-faq-question")
    .classList.toggle("change-color");
}

// fifth faq click event

fifthFaq.addEventListener("click", displayFifthAnswer);

function displayFifthAnswer() {
  document
    .getElementById("fifth-faq-answer")
    .classList.toggle("display-answer");
  document.getElementById("fifth-faq-question").classList.toggle("flip-arrow");
  document
    .getElementById("fifth-faq-question")
    .classList.toggle("change-color");
}
