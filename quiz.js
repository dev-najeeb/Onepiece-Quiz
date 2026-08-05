const Question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const quizbtn = document.getElementById("quizBtn");
const options = document.querySelectorAll(".options");
const quizContainer = document.querySelector(".quizContainer");
const nextBtn = document.querySelector("#next");
currentIndex = 0;
let lastIndex = 6;
let quizData;
let currQuestion;
async function loadQuizData() {
  const response = await fetch("./assets/quizData.json");
  quizData = await response.json();
  console.log(quizData);
}
loadQuizData();
function displayData() {
  currQuestion = quizData[currentIndex];
  const option = currQuestion.options;
  Question.innerText = currQuestion.question;
  option1.innerText = option[0];
  option2.innerText = option[1];
  option3.innerText = option[2];
  option4.innerText = option[3];
  console.log(quizData);
  currentIndex++;
  if (currentIndex === lastIndex) {
    console.log("this was the last question");
    nextBtn.classList.add("noClick");
  };
}
quizbtn.addEventListener("click", () => {
  console.log("function ran ");
  nextBtn.classList.add("active-button");
  quizbtn.classList.add(".hidden");
  options.forEach((btn)=>{
  btn.classList.add("visible");
  })
  displayData();
});
nextBtn.addEventListener("click", () => {
  displayData();
  quizContainer.classList.remove("bgChange", "wrongAnws");
  console.log("function ran");
});
options.forEach((SelcOption, index) => {
  SelcOption.addEventListener("click", () => {
    const correctAnswer = currQuestion.correct;
    if (correctAnswer === index) {
      quizContainer.classList.add("bgChange");
      console.log("Correct answer!", correctAnswer);
    } else {
      quizContainer.classList.add("wrongAnws");
      console.log("Incorrect");
    }
  });
});