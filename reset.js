const quiz = document.querySelector("Startquiz");//function for quiz 
const startBtn = document.querySelector("#quizBtn"); //starts quiz after button is clicked, will be inside of Startquiz  



let quiztimer = ("#time");//to be added after Startquiz funcx 
const question = document.querySelector("Startquest");//will start asking questions from array after "Start Quiz" is selected 
const choices = document.querySelector("Choicestart");//will display choices for answers from array then save the user choice to localStorage 

let message = document.querySelector("#Answermessage")//shows wrong/correct on DOM 
let storedScore = document.querySelector(".storedScore"); //stores highscores to local storage 


const end = document.querySelector("endQuiz"); //will be new funcx to end quiz & submit scores
let submitBtn = document.createElement("button"); //createElement within endQuiz funcx 
let btnMessage = "Submit"; //will append using submitBtn.textContent= btnMessage (or innerHTML?)



let highscoresMessage = document.querySelector("#noScores")//will be in highscores html, will display if no prev HS saved 
let previousScoresmessage = "There are no previously saved scores" //self explanatory 

const index = 0; //index must always be 0 
let score = ''; //set as empty string for data to pass through 
let correctAnswer = "Correct";
let wrongAnswer = "Wrong";



let savedScores = "";  //set as empty string for data to pass through 


//I need a funcx that stops the questions and saves user score to local storage after they select "finish quiz" 
//Once that funcx has run I need a funcx that prompts user to write their initials in a textbox & I need that funcx to save the initials to local storage after they finish the quiz 
//I need Highscores to open into its own HTML, it also needs to have access to local storage for previous user's scores/initials 




//arr for questions and answers 
let set = [
    {
        question: "Which of these is not a logical operator?",
        choices: ["&&", "||", ":"],
        correct: ":",
    },
    {
        question: "What is not an event type?",
        choices: ["Click", "Mousemove", "Cocktail Party",],
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







let quizTimer= ""  //starts timer

let timeLeft=  "" //var keeps track of seconds left in quiz 

function Startquiz(){

quizBtn.addEventListener("click", function(){


    function startTimer(){

        quizTimer = setInterval( function () {

        
        
        if (timeLeft > 0) {
        
        
        timeLeft--
        
        }
        
        
    }, 1000); 
        
        }
        
        clearInterval(quizTimer); 
    }

)};




    question.innerHTML = ""; //grabbing questions from arr 
    choices.innerHTML = ""; //grabbing choices from arr 
    // looping through the set array
	
    var currentQuestion = set[index].question 
    question.innerHTML = currentQuestion
    var currentAnswer = set[index].choices
	
    currentAnswer.forEach(function (i) {
        var button = document.createElement("button")
        button.innerHTML = i;
        choices.append(button)
        button.addEventListener("click", function (event) {
            event.preventDefault()
            let clicked = event.target;
            if (clicked.innerHTML) {
                if (clicked.innerHTML == set[index].correct) {
                    score = score + 1
					
                    console.log("Correct");
                    message.textContent= correctAnswer;     //something in here should change to show correct/wrong on the DOM rinse & repeat; done  
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
                index++
                if(index < set.length) {
                     //index = [0]
                    start(index)
                } else { 
				
				event.stopPropagation(); 
                    
                localStorage.setItem("scores");
                }
            }
        })
    })
   







localScores = {

initials: '', 

scores: '',


}

//object to store initials and scores, empty strings to pass data through 

// storedScore.push will add info from localstorage into Highscores list 