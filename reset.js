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
        question: "What color is the sky?",
        choices: ["Blue", "Purple", "Orange", "Green"],
        correct: "Blue"
    },
    {
        question: "What color is grass?",
        choices: ["Orange", "Purple", "Green", "Blue"],
        correct: "Green"
    }
]

function start(index) {
    end.style.display = "none"; //do I need to move this?

    question.innerHTML = "";
    choices.innerHTML = "";
    // loop through our set array
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
                    console.log("Correct")
                } else {
                    score = score - 1
                    console.log("Wrong")
                    if (score <= 0) {
                        score = 0
                    }
                }
                index++
                if(index < set.length) {
                    // index = 0
                    start(index)
                } else {
                    // call and end quiz button
                    end.style.display = "block"
                    quiz.style.display = "none"
                    scoreBox.innerHTML = "You got a score of: " + score + "!"
                    //get your initials from the textarea
                    //initials will actually equal the textArea's value
                    var initials = "A.G"
                    saveStorage({initials,score})
                }
            }
        })
    })
    // add an append not using append but using innerHTML to whatever the index of set is in the loop for each question, and each choice


}


//use this to store info localStorage.setItem
function saveStorage(newValue){
    console.log("Saving to Storage", newValue)
    var savedScores = JSON.parse(localStorage.getItem("poop"))
    console.log("Current saved scores", savedScores)
    savedScores.push(newValue)
    console.log("updated savedScores", savedScores)
    localStorage.setItem("poop", JSON.stringify(savedScores))
}

// do not place user info in local scope
function loadStorage(){
    var savedScores = JSON.parse(localStorage.getItem("poop"))
    console.log(savedScores)
    if(!savedScores){
        localStorage.setItem("poop", JSON.stringify([]))
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

loadStorage()

