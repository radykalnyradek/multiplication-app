const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const resetBtn = document.getElementById("reset");

const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

resetBtn.addEventListener("click", () => {
  score = 1;
});

if (!score) {
  score = 0;
}

scoreEl.innerText = "score: " + score;
questionEl.innerText = "What is " + num1 + " multiply by " + num2 + "?";

formEl.addEventListener("submit", () => {
  const userAnswer = answerEl.value;
  if (+userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}