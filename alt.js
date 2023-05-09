const info = document.querySelector(".info");
const saveBtn = document.querySelector("#quizBtn");

const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const choices = document.querySelector(".choices");
const scoreBox = document.querySelector(".score");
const submitBtn = document.querySelector(".submit");
const end = document.querySelector(".end");
const finalScore= document.querySelector(".finalScore");
const storedScore= document.querySelector(".storedScore"); 

var index = 0; //this doesnt need to change
let score = 0; //score needs to = 0? 



saveBtn.addEventListener("click", function () {
    info.style.display = "none"
    start(index)
})


var set = [ //add real questions once functionality is set
    {
        question: "Which of these is not a logical operator?",
        choices: ["&&", "||", ":"],
        correct: ":"
    },
    {
        question: "What is not an event type?",
        choices: ["Click", "Mousemove", "Cocktail Party",],
        correct: "Cocktail Party"
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
