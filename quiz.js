const Question = document.getElementById("question");
const getQuestion = document.querySelector("#startBtn");
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")

// const QuestionIndex = 
QuestionIndex = 0;
async function loadQuizData() {
    const response = await fetch("./assets/quizData.json");
    const quizData = await response.json();
    console.log(quizData);
    Question.innerText = quizData[0].question;
    option1.innerText = quizData[0].options[0];
    option2.innerText = quizData[1].options[1];
    option3.innerText = quizData[2].options[2];
    option4.innerText = quizData[3].options[3];

    
}
getQuestion.addEventListener("click",()=>{
loadQuizData()
})