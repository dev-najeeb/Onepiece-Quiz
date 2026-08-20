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
let scoreCard = document.querySelector(".scoreCard");
let difficultyBox = document.querySelector(".currDifficulty");
const medium = document.createElement("button");
score = 0;
let currentFuntion;
currentIndex = 0;
difficultyIndex = 0;
let lastIndex = 5;
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
  currentFuntion = displayData1;
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
  difficultyBox.innerText = "Difficulty: Easy";
  if(currentIndex === lastIndex) {
    nextBtn.classList.add("hidden")
    console.log("this is the last Question")
    medium.classList.add("medium")
    medium.innerText = "Be a Mighty Pirate"
    medium.addEventListener("onclick",() => {
       displayData2()
    })
  }
}
easyBtn.addEventListener("click", () => {
  difficultyIndex = 1;
  displayData1();
  diffContainer.style.display = "none";
  hardBtn.classList.add("hidden");
  mediumBtn.classList.add("hidden");
  easyBtn.classList.add("hidden");
  p.classList.add("hidden");
  scoreCard.classList.add("visible");
  difficultyBox.classList.add("visible");
  options.forEach((btn) => {
    btn.classList.add("visible");
  });
  nextBtn.classList.add("active-button");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
});
function displayData2() {
  currentFuntion = displayData2;
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
  difficultyBox.innerText = "Difficulty: Medium";
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
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
  scoreCard.classList.add("visible");
  difficultyBox.classList.add("visible");
});
function displayData3() {
  currentFuntion = displayData3;
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
  difficultyBox.innerText = "Difficulty: Hard";
}
hardBtn.addEventListener("click", () => {
  difficultyIndex = 3;
  displayData3();
  diffContainer.style.display = "none";
  hardBtn.classList.add("hidden");
  mediumBtn.classList.add("hidden");
  easyBtn.classList.add("hidden");
  p.classList.add("hidden");
  scoreCard.classList.add("visible");
  difficultyBox.classList.add("visible");
  nextBtn.classList.add("active-button");
  options.forEach((btn) => {
    btn.classList.add("visible");
  });
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
});
scoreCard.innerText = "Bounty : " + score;
options.forEach((SelcOption, index) => {
  SelcOption.addEventListener("click", (event) => {
    const clickedBtn = event.target;
    const correctAnswer = currQuestion.correct;
    if (correctAnswer === index) {
      if(currentFuntion === displayData1) {
        score += 1000;
      scoreCard.innerText = "Bounty: " + score;
      } 
      else if(currentFuntion === displayData2) {
        score += 10000
      scoreCard.innerText = "Bounty: " + score;
      }
      else if(currentFuntion === displayData3) {
        score += 1000000
      scoreCard.innerText = "Bounty: " + score;

      }
      // scoreCard.innerText = "SCORE : " + score;
      scoreCard.classList.add("scoreAnimation");
      clickedBtn.classList.add("correctAnws", "clickBlocker");
      clickedBtn.classList.remove("wrongAnws");
      console.log("Correct answer!", correctAnswer);
      nextBtn.classList.remove("clickBlocker");
      nextBtn.innerText = "next =>";
    } else if (correctAnswer !== index) {
      nextBtn.classList.add("wrongAnswAnimation");
      clickedBtn.classList.add("wrongAnws");
      console.log("Incorrect");
    }
  });
});
nextBtn.addEventListener("click", () => {
  if (difficultyIndex === 1) {
    displayData1();
    nextBtn.innerText = "Select the Correct Option";
    nextBtn.classList.add("clickBlocker");
  } else if (difficultyIndex === 2) {
    displayData2();
      nextBtn.innerText = "Select the Correct Option";
    nextBtn.classList.add("clickBlocker");
  } else if (difficultyIndex === 3) {
    displayData3();
      nextBtn.innerText = "Select the Correct Option";
    nextBtn.classList.add("clickBlocker");
  }
  console.log("function ran");
  options.forEach((opt) => {
    opt.classList.remove(
      "correctAnws",
      "wrongAnws",
      "clickBlocker",
      "scoreAnimation",
    );
  });
});
