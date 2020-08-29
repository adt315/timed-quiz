

var start = document.getElementById("start-card");
var question1 = document.getElementById("question1-card");
var question2 = document.getElementById("question2-card");
var question3 = document.getElementById("question3-card");
var question4 = document.getElementById("question4-card");
var question5 = document.getElementById("question5-card");
// var = document.getElementById("");
// var = document.getElementById("");
// var = document.getElementById("");
// var = document.getElementById("");
// var = document.getElementById("");
// var = document.getElementById("");


// var highScores = [];
var secondsLeft = 76;

var timeElement = document.getElementById("time");

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

// var mainElement = document.getElementById("main");

// function sendMessage() {
//   timeElement.textContent = " ";

//   var imgElement = document.createElement("img");

//   imgElement.setAttribute("src", "images/image_1.jpg");
//   mainElement.appendChild(imgElement);

// }






function startQuiz () {
// start card shows at beginning
// button starts timer , gets first question
}

function getQuestions () {
// will begin once timer starts, show hidden questions one by one, possibly for loop
}

function answerCheck () {
// checks if answer is right or wrong
// each button is a class called choices, we'll grab the value attribute to see if value = ..... check that with currentQuestion.answer
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
// btn.addEventListener("click", answerCheck);  
    
