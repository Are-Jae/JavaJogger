// const info = document.querySelector(".info");needs an id 
const startBtn = document.querySelector("#quizBtn");
const saveBtn = document.querySelector("#saveBtn");

const quiz = document.querySelector("Startquiz");
const question = document.querySelector("Startquest");
const choices = document.querySelector("Choicestart");
// const scoreBox = document.querySelector(".score");needs an id 
const timer = ("#time");
const submitBtn = document.querySelector(".submit");
const end = document.querySelector("endQuiz");
const finalScore= document.querySelector(".finalScore"); 
const storedScore= document.querySelector(".storedScore");
let message= document.querySelector("#message")

let index = 0; 
let score = ''; //what do I need to save this as? 0 or empty string? 
let correctAnswer= "Correct";
let wrongAnswer= "Wrong";



let savedScores= ""; //what do I need to save this as? 0 or empty string? 


//I need a funcx that stops the questions and saves user score to local storage after they select "finish quiz" 
//Once that funcx has run I need a funcx that prompts user to write their initials in a textbox & I need that funcx to save the initials to local storage after they finish the quiz 
//I need Highscores to open into its own HTML, it also needs to have access to local storage for previous user's scores/initials 





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
        question:"What was Javascript originally named?",
        choices:["Latte", "Mocha", "Espresso"],
        correct:"Mocha",
    },
    {
        question:"Which is not a Javascript data type",
        choices:["Object", "Boolean", "coffeeReader" ],
        correct: "coffeeReader",
    },
    {
        question:"What does Javascript do to a document/webpage?",
        choices:["Styles the page", "Adds interactive elements", "Gives user free coffee"],
        correct: "Adds interactive elements",
    }
]

function start(index) { //this function needs to be split up, is doing too many things 
 textBox.style.display = "none" //hides initials until end of quiz 

    question.innerHTML = "";
    choices.innerHTML = "";
    // loop through the set array
    let currentQuestion = set[index].question
    question.innerHTML = currentQuestion
    let currentAnswer = set[index].choices
    currentAnswer.forEach(function (i) {
        let button = document.createElement("button")
        button.innerHTML = i;
        choices.append(button)
        button.addEventListener("click", function (event) {
            event.preventDefault()
            let clicked = event.target;
            if (clicked.innerHTML) {
                if (clicked.innerHTML == set[index].correct) {
                    score = score + 1
                    console.log("Correct");
                    message.textContent= correctAnswer;//something in here should change to show correct/wrong on the DOM rinse & repeat 
                } else {
                    score = score - 1
                    console.log("Wrong");
                    message.textContent= wrongAnswer;
                    if (clicked.innerHTML == set[index].correct){
                        score <= 0
                        //score = 0
                        console.log("Wrong");
                        message.textContent=wrongAnswer;

                        index++
                    } 
                }
              
            }
            

            if(index < set.length) {
                index = [0]
               start(index)
            } else {
               // call an end quiz button
            
            return;
            }
        })
    })
    


}


 
         



//this function below is saving user info to console 

 function saveStorage(newValue){  
   console.log("Saving to Storage", newValue)
    let savedScores = JSON.parse(localStorage.getItem(" "))
    console.log("Current saved scores", savedScores)
    savedScores.push(newValue)
    console.log("updated savedScores", savedScores)
    localStorage.setItem("scores", JSON.stringify(savedScores))
}

// do not place user info in local scope, place in global scope 
function loadStorage(){
    let savedScores = JSON.parse(localStorage.getItem("scores"))
    console.log("- ", savedScores)
    if(!savedScores){
        localStorage.setItem("scores", JSON.stringify([]))
        return("Must save initials")
    }
    //rendering the storage by looping thorugh the array
    savedScores.forEach(function(element){
        console.log(element)
            let newElement = document.createElement("li")
            newElement.textContent = element.initials + " : " + element.score
            console.log(newElement)
            storedScore.push(newElement)
    })

}

loadStorage();


