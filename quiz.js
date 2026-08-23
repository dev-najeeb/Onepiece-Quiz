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
const diffTransition = document.createElement("button");
let PopUp = document.querySelector(".popUp");
let popupBackdrop = document.querySelector(".popupBackdrop");
let initialBounty = "0"
let beginnerBounty = 0 ;
let VeteranBounty = 0;
let LegendBounty = 0;

let currentIndex = 0;
let currentFunction;
let difficultyIndex = 0;
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
  currentFunction = displayData1;
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
}
easyBtn.addEventListener("click", () => {
  difficultyIndex = 1;
  displayData1();
  diffContainer.style.display = "none";
  showOptions();
  hideElements(hardBtn, mediumBtn, easyBtn);
  nextBtn.classList.add("active-button");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
  showElements(scoreCard, difficultyBox);
});
function displayData2() {
  difficultyIndex = 2;
  currentFunction = displayData2;
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
  showOptions();
  hideElements(hardBtn, mediumBtn, easyBtn);
  nextBtn.classList.add("active-button");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
  showElements(scoreCard, difficultyBox);
});
function displayData3() {
  currentFunction = displayData3;
  difficultyIndex = 3
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
  showOptions();
  hideElements(hardBtn, mediumBtn, easyBtn);
  nextBtn.classList.add("active-button");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
  showElements(scoreCard, difficultyBox);
});
scoreCard.innerText = "Bounty : " + initialBounty;
options.forEach((SelcOption, index) => {
  SelcOption.addEventListener("click", (event) => {
    const clickedBtn = event.target;
    const correctAnswer = currQuestion.correct;
    if (correctAnswer === index) {
      if (currentFunction === displayData1) {
        beginnerBounty += 1000000;
        scoreCard.innerText = "Bounty: " + beginnerBounty;
      } else if (currentFunction === displayData2) {
        VeteranBounty += 10000000;
        scoreCard.innerText = "Bounty: " + VeteranBounty;
      } else if (currentFunction === displayData3) {
        LegendBounty += 1000000000;
        scoreCard.innerText = "Bounty: " + LegendBounty;
      }
      jumpDifficulties();
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
nextBtn.onclick = () => {
  console.log("nextbtn is clicked");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
  if (difficultyIndex === 1) {
    displayData1();
  } else if (difficultyIndex === 2) {
    displayData2();
    nextBtn.innerText = "Select the Correct Option";
    nextBtn.classList.add("clickBlocker");
  } else if (difficultyIndex === 3) {
    displayData3();
    nextBtn.innerText = "Select the Correct Option";
    nextBtn.classList.add("clickBlocker");
  }
  Optioreset();
  console.log("function ran");
}
function Optioreset() {
  options.forEach((opt) => {
    opt.classList.remove(
      "correctAnws",
      "wrongAnws",
      "clickBlocker",
      "scoreAnimation",
    );
  });
}
function showOptions() {
  options.forEach((opt) => {
    opt.classList.add("visible");
  });
}
function jumpDifficulties() {
  if (currentIndex === lastIndex) {
    console.log("this is the marine recruit difficulty");
    if (!quizContainer.contains(diffTransition)) {
      quizContainer.append(diffTransition);
    }
    currentIndex = 0;
    difficultyTransition(diffTransition);
    hideElements(nextBtn)
    if(difficultyIndex === 3) {
      hideElements(diffTransition);
      PopUp.classList.add("visible");
      popupBackdrop.classList.add("visible");

    }
  }
}
function difficultyTransition(element) {
  element.classList.remove("hidden");
  element.classList.add("diffTransitions", "active-button");
  if(difficultyIndex === 1){
    element.innerText = "Be a Mighty Pirate"
  }else if(difficultyIndex === 2) {
    element.innerText = "Be a Mighty Yonko"
  }
  element.onclick = () => {
    if (difficultyIndex === 1) {
      displayData2();
    } else if (difficultyIndex === 2) {
      displayData3();
    }
    Optioreset();
    element.classList.remove("active-button");
    element.classList.add("hidden");
    enableNextbtn();
  };
  console.log("Transitionbtn is clicked");
}
function enableNextbtn() {
  nextBtn.classList.remove("hidden");
  nextBtn.classList.add("active-button", "clickBlocker");
  nextBtn.innerText = "Select the Correct Option";
  nextBtn.classList.add("clickBlocker");
}
function hideElements(...elements) {
  elements.forEach((element) => {
    element.classList.add("hidden");
    element.classList.remove("active-button");
  });
}
function showElements(...elements) {
  elements.forEach((element) => {
    element.classList.add("visible");
    element.classList.add("active-button");
  });
}
