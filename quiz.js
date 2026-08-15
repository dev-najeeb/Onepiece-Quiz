const Question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const quizbtn = document.getElementById("quizBtn");
const options = document.querySelectorAll(".options");
const quizContainer = document.querySelector(".quizContainer");
const nextBtn = document.querySelector("#next");
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");
const p = document.querySelector("#pHeading");
const diffContainer = document.querySelector(".difficulties");

currentIndex = 0;
difficultyIndex = 0;
let lastIndex = 10;
let quizData;
let questionData;
let currQuestion;
async function loadQuizData() {
  const response = await fetch("./assets/quizData.json");
  quizData = await response.json();
  console.log(quizData);
}
loadQuizData();
function displayData1() {
  currData = quizData;
  questionData = currData.difficulties.easy;
  currQuestion = questionData[currentIndex];
  Question.innerText = currQuestion.question;
  const options = currQuestion.options;
  option1.innerText = options[0];
  option2.innerText = options[1];
  option3.innerText = options[2];
  option4.innerText = options[3];
  currentIndex++;
}
easyBtn.addEventListener("click", () => {
  difficultyIndex = 1;
  displayData1();
  diffContainer.style.display = "none";
  hardBtn.classList.add("hidden");
  mediumBtn.classList.add("hidden");
  easyBtn.classList.add("hidden");
  p.classList.add("hidden");
  options.forEach((btn) => {
    btn.classList.add("visible");
  });
  nextBtn.classList.add("active-button");
});
function displayData2() {
  currData = quizData;
  questionData = currData.difficulties.medium;
  currQuestion = questionData[currentIndex];
  Question.innerText = currQuestion.question;
  const options = currQuestion.options;
  option1.innerText = options[0];
  option2.innerText = options[1];
  option3.innerText = options[2];
  option4.innerText = options[3];
  currentIndex++;
}
mediumBtn.addEventListener("click", () => {
  difficultyIndex = 2;
  displayData2();
  diffContainer.style.display = "none";
  hardBtn.classList.add("hidden");
  mediumBtn.classList.add("hidden");
  easyBtn.classList.add("hidden");
  p.classList.add("hidden");
  options.forEach((btn) => {
    btn.classList.add("visible");
  });
  nextBtn.classList.add("active-button");
});
function displayData3() {
  currData = quizData;
  questionData = currData.difficulties.hard;
  currQuestion = questionData[currentIndex];
  Question.innerText = currQuestion.question;
  const options = currQuestion.options;
  option1.innerText = options[0];
  option2.innerText = options[1];
  option3.innerText = options[2];
  option4.innerText = options[3];
  currentIndex++;
}
hardBtn.addEventListener("click", () => {
  difficultyIndex = 3;
  displayData3();
  diffContainer.style.display = "none";
  hardBtn.classList.add("hidden");
  mediumBtn.classList.add("hidden");
  easyBtn.classList.add("hidden");
  p.classList.add("hidden");
  nextBtn.classList.add("active-button")
  options.forEach((btn) => {
    btn.classList.add("visible");
  });
});

options.forEach((SelcOption, index) => {
  SelcOption.addEventListener("click", (event) => {
    const clickedBtn = event.target;
    const correctAnswer = currQuestion.correct;
    if (correctAnswer === index) {
      clickedBtn.classList.add("correctAnws");
      clickedBtn.classList.remove("wrongAnws");
      console.log("Correct answer!", correctAnswer);
    } else {
      clickedBtn.classList.add("wrongAnws");
      console.log("Incorrect");
    }
  });
});
nextBtn.addEventListener("click", () => {
  if (currentIndex === lastIndex) {
    console.log("this was the last question");
    return;
  }
  if (difficultyIndex === 1) {
    displayData1();
  } else if (difficultyIndex === 2) {
    displayData2();
  } else if (difficultyIndex === 3) {
    displayData3();
  }
  console.log("function ran");
  options.forEach((opt) => {
    opt.classList.remove("correctAnws", "wrongAnws");
  });
});
