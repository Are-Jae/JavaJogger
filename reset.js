const info = document.querySelector(".info");
const startBtn = document.querySelector("#quizBtn");
const saveBtn = document.querySelector("#saveBtn");

const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const choices = document.querySelector(".choices");
const scoreBox = document.querySelector(".score");
const submitBtn = document.querySelector(".submit");
const end = document.querySelector(".end");
const finalScore= document.querySelector(".finalScore");
const storedScore= document.querySelector(".storedScore"); 
let message= document.querySelector("#message")

var index = 0; //this doesnt need to change
let score = 0; //score needs to = 0? 
let correctAnswer= "Correct";
let wrongAnswer= "Wrong";


// how can I add a "finish quiz" button? to the quiz code, it will end quiz function 
// Need a function to just store initials after quiz is done; How can I write a function to store the highscores/initials to display AFTER the last question is answered? it needs to be stored within an object, then a function needs to be made in order for the items in that object to be called like for var set using localstorage.setitem, change the display settings 

startBtn.addEventListener("click", function () {
    info.style.display = "none"
    start(index)
})


saveBtn.addEventListener("click", function(){
//get text from initials 
//call saveStorage({
    //initials:;
    //score:;
//})
//loadStorage()
})

var set = [ //add real questions once functionality is set
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

function start(index) {
    end.style.display = "none" //hides initials until end of quiz 

    question.innerHTML = "";
    choices.innerHTML = "";
    // loop through the set array
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
                    message.textContent= correctAnswer;//something in here should change to show correct/wrong on the DOM rinse & repeat 
                } else {
                    score = score - 1
                    console.log("Wrong");
                    message.textContent= wrongAnswer;
                    if (score <= 0) {
                        score = 0
                    }
                }
                index++
                if(index < set.length) {
                     //index = [0]
                    start(index)
                } else {
                    // call and end quiz button
                    end.style.display = "block"
                    quiz.style.display = "none"
                    scoreBox.innerHTML = "You got a score of: " + score + "!" 
                    //get your initials from the textarea
                    //initials will actually equal the textArea's value
                    //var initials = " "
                    //saveStorage({initials,score})
                }
            }
        })
    })
    // add an append not using append but using innerHTML to whatever the index of set is in the loop for each question, and each choice


}


// //use this to store info localStorage.setItem


//this function below is saving user info to console 

 function saveStorage(newValue){  
   console.log("Saving to Storage", newValue)
    var savedScores = JSON.parse(localStorage.getItem(" "))
    console.log("Current saved scores", savedScores)
    savedScores.push(newValue)
    console.log("updated savedScores", savedScores)
    localStorage.setItem("scores", JSON.stringify(savedScores))
}

// do not place user info in local scope, place in global scope 
function loadStorage(){
    var savedScores = JSON.parse(localStorage.getItem(" "))
    console.log(savedScores)
    if(!savedScores){
        localStorage.setItem("", JSON.stringify([]))
        return
    }
    //rendering the storage
    //loop thorugh the array
    savedScores.forEach(function(element){
        console.log(element)
            var newElement = document.createElement("li")
            newElement.textContent = element.initials + " : " + element.score
            console.log(newElement)
            storedScore.append(newElement)
    })

}

//loadStorage();

