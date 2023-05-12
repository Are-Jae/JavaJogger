const startBtn = document.querySelector("#quizBtn");

const quiztimer = document.querySelector("#time");
const question = document.querySelector("#Startquest");
const quizContainer = document.querySelector("#Startquiz");
let message = document.querySelector("#Answermessage");
const option1 = document.getElementById("option-1");
const option2= document.getElementById("option-2");
const option3 = document.getElementById("option-3");
option1.addEventListener("click",checkanswer)
option2.addEventListener("click",checkanswer)
option3.addEventListener("click",checkanswer)
quizContainer.style.display = "none"
const storedScores = localStorage.getItem("storedScores");
const localScores = storedScores ? JSON.parse(storedScores) : [];

const end = document.querySelector("#endQuiz");
// let submitBtn = document.createElement("button");
// let btnMessage = "Submit";
// submitBtn.textContent = btnMessage;

let highscoresMessage = document.querySelector("#noScores")
let previousScoresmessage = "There are no previously saved scores"

let index = 0;
let score = 0;
let correctAnswer = "Correct";
let wrongAnswer = "Wrong";

let savedScores = "";

let set = [
    {
        question: "Which of these is not a logical operator?",
        choices: ["&&", "||", ":"],
        correct: ":",
    },
    {
        question: "What is not an event type?",
        choices: ["Click", "Mousemove", "Cocktail Party"],
        correct: "Cocktail Party",
    },
    {
        question: "How long did it take to develop Javascript?",
        choices: ["10 Days", "3 Months", "5 Years"],
        correct: "10 Days",
    },
    {
        question: "What was Javascript originally named?",
        choices: ["Latte", "Mocha", "Espresso"],
        correct: "Mocha",
    },
    {
        question: "Which is not a Javascript data type",
        choices: ["Object", "Boolean", "coffeeReader"],
        correct: "coffeeReader",
    },
    {
        question: "What does Javascript do to a document/webpage?",
        choices: ["Styles the page", "Adds interactive elements", "Gives user free coffee"],
        correct: "Adds interactive elements",
    }
]

let quizTimer = null;
let timeLeft = 30;

function startTimer() {
    quizTimer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            quiztimer.textContent = timeLeft;
        } else {
            clearInterval(quizTimer);
            quizTimer = null;
            endQuiz();
        }
    }, 1000);
};



function startQuiz() {
    quizContainer.style.display = "block"
    startBtn.style.display = "none"
    startTimer();
    renderQuestion()
}
function renderQuestion(){

    question.innerText = set[index].question;
    option1.textContent = set[index].choices[0];
    option2.textContent = set[index].choices[1];
    option3.textContent = set[index].choices[2];
}

function checkanswer(event){
   var userSelection =  event.target.textContent
   if(userSelection === set[index].correct){
    score +=1
    message.textContent = correctAnswer

   }else {
     timeLeft -= 5 // timeLeft = timeLeft -5
     message.textContent = wrongAnswer 
   } 
   if(index < set.length-1) {
       index++;
        
      renderQuestion()
   } else { 
   
       clearInterval(quizTimer);
       quizTimer = null;
       endQuiz();
       
   
   }

}
/*
    choices.innerHTML = "";
    var currentQuestion = set[index].question;
    question.innerHTML = currentQuestion;
    var currentAnswer = set[index].choices;
    currentAnswer.forEach(function start(i) {
      var button = document.createElement("button");
      button.innerHTML = i;
      choices.append(button);
      button.addEventListener("click", function(event) {
        event.preventDefault();
        let clicked = event.target;
        if (clicked.innerHTML) {
            if (clicked.innerHTML == set[index].correct) {
                score = score + 1
                
                console.log("Correct");
                message.textContent= correctAnswer;      
            } else {
                score = score - 1
                console.log("Wrong");
                message.textContent= wrongAnswer;
                if (clicked.innerHTML == set[index].correct){
                    score <= 0
             
                    
                    console.log("Wrong");
                    message.textContent=wrongAnswer;
                }
            }
      */      
            function endQuiz() {
                quizContainer.style.display = "none"
                localStorage.setItem("storedScores", JSON.stringify(storedScores)); 
              }   
    
   
  startBtn.addEventListener("click", startQuiz);

  //after answer made quiz does not move to next queston, why?
  //is submit button working?