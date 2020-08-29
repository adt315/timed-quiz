

var start = document.getElementById("start-button");
var startCard = document.getElementById("start-card")
var question1 = document.getElementById("question1-card");
var question2 = document.getElementById("question2-card");
var question3 = document.getElementById("question3-card");
var question4 = document.getElementById("question4-card");
var question5 = document.getElementById("question5-card");
var choiceA = document.getElementById("A");
var answerButton = document.getElementById("answer-button");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD= document.getElementById("D");
// var = document.getElementById("");
// var = document.getElementById("");

var quizQuestions = [ 
    {
        question : "How many states are smaller than Connecticut in total area?",
        choiceA : "0",
        choiceB : "1",
        choiceC : "2",
        choiceD : "3",
        correctAnswer: "C",
    } , 
    {
        question : "What is the state bird of Connecticut?",
        choiceA : "American Robin",
        choiceB : "Hermit Thrush",
        choiceC : "Black-Capped Chickadee",
        choiceD : "Purple Finch",
        correctAnswer: "A",
    } ,
    {
        question : "What is the state song of Connecticut?",
        choices: ["", "", "", ""],
        choiceA : "Home On The Range",
        choiceB : "These Green Mountains",
        choiceC : "You Are My Sunshine",
        choiceD : "Yankee Doodle",
        correctAnswer: "D",
    } ,
    {
        question : "What is the capital of Connecticut?",
        choiceA : "Bridgeport",
        choiceB : "Hartford",
        choiceC : "Springfield",
        choiceD : "New Haven",
        correctAnswer: "B",
    } ,
    {
        question : "Connecticut was admitted as the _______ state.",
        choiceA : "second",
        choiceB : "third",
        choiceC : "fourth",
        choiceD : "fifth",
        correctAnswer: "D",
    } ,
]

// console.log(quizQuestions);

var secondsLeft = 76;
var timeElement = document.getElementById("time");

start.addEventListener("click", startQuiz);

function startQuiz () {
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeElement.textContent = "Time: " + secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
          //   alert("Time's Up!");
          }
        }, 1000);
      }
      setTime();

    startCard.style.display="none";  
    question1.style.display="block";
    // start card shows at beginning
    //  gets first question
    }

answerBtn.addEventListener("click", answerCheck); 


// var highScores = [];


// function answerIsCorrect
// // vid
// function answerIsWrong
// // vid



function answerCheck (correctAnswer) {
    // checks if answer is right or wrong
    // each button is a class called choices, we'll grab the value attribute to see if value = ..... check that with currentQuestion.answer
    }

function getQuestions () {
    // will begin once timer starts, show hidden questions one by one, possibly for loop
}



function quizEnd () {
// won't be called until run out of questions or run out of time
}

// var questionsElement = document.getElementById("questions");
// var choicesElement = document.getElementById("choices");


// for(var i=0; i<questions.length; i++) {
//   var currentQuestion = questions [i];
//   console.log(currentQuestion);
//   var titleElement = document.getElementById("question-title");
//   titleElement.textContent = currentQuestion.title;
//   questionsElement.append(titleElement);
// }



 

// function answerCheck() {
// // Decrease time if wrong answer
//     if (document.querySelector(".correct").onclick) {
//     document.querySelector(".correct").style.background-color ="green";
//     document.getElementByClass("result").innerHTML = "Correct!";
//     score++;
//   } else {
//     ("Wrong!");
//   }
//  }


// document.getElement
 
    
