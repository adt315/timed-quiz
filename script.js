
var start = document.querySelector("#start-button");
var startCard = document.querySelector("#start-card");
var question = document.querySelector(".question");
var question1 = document.querySelector("#question1-card");
var question2 = document.querySelector("#question2-card");
var question3 = document.querySelector("#question3-card");
var question4 = document.querySelector("#question4-card");
var question5 = document.querySelector("#question5-card");
var choices = document.querySelector(".choices");
var choiceA = document.querySelector(".A-answer-btn");
var choiceB = document.querySelector(".B-answer-btn");
var choiceC = document.querySelector(".C-answer-btn");
var choiceD = document.querySelector(".D-answer-btn");
var result = document.querySelector(".result")
var highScores= document.querySelector("#high-scores-list");
var timeElement = document.querySelector("#time");


var secondsLeft = 76;
var timerInterval;
var quizQuestions = [question1, question2, question3, question4, question5];
var questionNumber = 0;
var highScores = [];


start.addEventListener("click", startQuiz);

function startQuiz () {
      timerInterval = setInterval(quizTimer, 1000);
      startCard.style.display="none";
      question1.style.display="block";
}

function quizTimer() {
    secondsLeft--;
    timeElement.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // quizEnd();
    }
  }

  choiceA.addEventListener("click", choiceAResult);
  choiceB.addEventListener("click", choiceBResult);
  choiceC.addEventListener("click", choiceCResult);
  choiceD.addEventListener("click", choiceDResult);
  
function choiceAResult () {
    // quizQuestions[questionNumber].style.display="none";
    // quizQuestions[questionNumber + 1].style.display="block";
    // questionNumber++;
    if (choiceA.classList.contains("wrong")) {
        secondsLeft -= 10;
        document.querySelector(".result").innerHTML = "Wrong!";
        document.querySelector(".result").style.color = "red";
        document.querySelector(".result").style.fontWeight = "bold";
        document.querySelector(".result").style.fontSize = "20px";
    }
}

function choiceBResult () {
    // quizQuestions[questionNumber].style.display="none";
    // quizQuestions[questionNumber + 1].style.display="block";
    // questionNumber++;
    if (choiceB.classList.contains("wrong")) {
        secondsLeft -= 10;
        document.querySelector(".result").innerHTML = "Wrong!";
        document.querySelector(".result").style.color = "red";
        document.querySelector(".result").style.fontWeight = "bold";
        document.querySelector(".result").style.fontSize = "20px";
    }
}

function choiceCResult () {
    // quizQuestions[questionNumber].style.display="none";
    // quizQuestions[questionNumber + 1].style.display="block";
    // questionNumber++;
    if (choiceC.classList.contains("wrong")) {
        secondsLeft -= 10;
        document.querySelector(".result").innerHTML = "Wrong!";
        document.querySelector(".result").style.color = "red";
        document.querySelector(".result").style.fontWeight = "bold";
        document.querySelector(".result").style.fontSize = "20px";
    } else {
        document.querySelector(".result").innerHTML = "Correct!";
        document.querySelector(".result").style.color = "#32CD32";
        document.querySelector(".result").style.fontWeight = "bold";
        document.querySelector(".result").style.fontSize = "20px";
    }
}

function choiceDResult () {
    // quizQuestions[questionNumber].style.display="none";
    // quizQuestions[questionNumber + 1].style.display="block";
    // questionNumber++;
    if (choiceD.classList.contains("wrong")) {
        secondsLeft -= 10;
        document.querySelector(".result").innerHTML = "Wrong!";
        document.querySelector(".result").style.color = "red";
        document.querySelector(".result").style.fontWeight = "bold";
        document.querySelector(".result").style.fontSize = "20px";
    }
}


// function correctAnswer () {
//     // document.getElementById(runningQuestion).style.backgroundColor = "green";
//     document.getElementByClass("result").innerHTML = "Correct!";
// }

// function wrongAnswer () {
//     // document.getElementById(runningQuestion).style.backgroundColor = "red";
//     document.getElementByClass("result").innerHTML = "Wrong!";
//     secondsLeft-10;
// }



    // function endQuiz () {
    //     //show end quiz card
    //     // style.display="block";
    //     // won't be called until run out of questions or run out of time
    //     }
        


// Don't think I need.../////////////////////////////////////////////////////////////////////////////////////////////////


 // for(var i = 0; i < quizQuestions.length; i++) {
    //     var currentQuestion = quizQuestions [i];
    //     currentQuestion.style.display="block";
    // }


    // var quizQuestions = [ 
//     {
//         question : "How many states are smaller than Connecticut in total area?",
//         choiceA : "0",
//         choiceB : "1",
//         choiceC : "2",
//         choiceD : "3",
//         correctAnswer: "C",
//     } , 
//     {
//         question : "What is the state bird of Connecticut?",
//         choiceA : "American Robin",
//         choiceB : "Hermit Thrush",
//         choiceC : "Black-Capped Chickadee",
//         choiceD : "Purple Finch",
//         correctAnswer: "A",
//     } ,
//     {
//         question : "What is the state song of Connecticut?",
//         choices: ["", "", "", ""],
//         choiceA : "Home On The Range",
//         choiceB : "These Green Mountains",
//         choiceC : "You Are My Sunshine",
//         choiceD : "Yankee Doodle",
//         correctAnswer: "D",
//     } ,
//     {
//         question : "What is the capital of Connecticut?",
//         choiceA : "Bridgeport",
//         choiceB : "Hartford",
//         choiceC : "Springfield",
//         choiceD : "New Haven",
//         correctAnswer: "B",
//     } ,
//     {
//         question : "Connecticut was admitted as the _______ state.",
//         choiceA : "second",
//         choiceB : "third",
//         choiceC : "fourth",
//         choiceD : "fifth",
//         correctAnswer: "D",
//     } ,
// ]

// console.log(quizQuestions);