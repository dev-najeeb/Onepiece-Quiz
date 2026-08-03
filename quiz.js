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
async function loadQuizData() {
  const response = await fetch("./assets/quizData.json");
  const quizData = await response.json();
  const currQuestion = quizData[currentIndex];
  const option = currQuestion.options;
  console.log(quizData);
  Question.innerText = currQuestion.question;
  option1.innerText = option[0];
  option2.innerText = option[1];
  option3.innerText = option[2];
  option4.innerText = option[3];
  let correctAnswer = currQuestion.correct;
  options.forEach((SelcOption,index) => {
    SelcOption.addEventListener("click", () => {
      if (correctAnswer === index) {
        quizContainer.classList.add("bgChange");
        console.log("Correct answer!", correctAnswer);
      }else {
        console.log("Incorrect")
      }
    });
    SelcOption.classList.add("visible");
  });

  currentIndex++;
}
quizbtn.addEventListener("click", () => {
  nextBtn.classList.add("active-button")
  quizbtn.classList.add(".hidden");
    loadQuizData();
});
nextBtn.addEventListener("click",()=>{
  loadQuizData();
})

