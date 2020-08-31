
var start = document.querySelector("#start-button");
var startCard = document.querySelector("#start-card");
var question1 = document.querySelector("#question1-card");
var question2 = document.querySelector("#question2-card");
var question3 = document.querySelector("#question3-card");
var question4 = document.querySelector("#question4-card");
var question5 = document.querySelector("#question5-card");
var finishCard = document.querySelector("#finish-card");
var choiceA = document.getElementsByClassName("A-answer-btn");
var choiceB = document.getElementsByClassName("B-answer-btn");
var choiceC = document.getElementsByClassName("C-answer-btn");
var choiceD = document.getElementsByClassName("D-answer-btn");
var submitBtn = document.querySelector("#submit-btn");
var result = document.getElementsByClassName("result")
var timeElement = document.querySelector("#time");
var scoreElement = document.querySelector("#score");
var initsField = document.getElementById("initial-field");

var secondsLeft = 76;
var timerInterval;
var quizQuestions = [question1, question2, question3, question4, question5, finishCard];
var questionNumber = 0;
var myScore = {
    initials: "initials",
    personalScore: "personalScore"
};
var highScores = [];

//////////////

/* localStorage.clear();

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// The array to store
var array = [1, 2, 3];
// Store after JSON stringifying (is this a verb?) it
localStorage.setItem('myArray', JSON.stringify(array));

// Get an array from local storage

// Retrieve the array from local storage
var array = localStorage.getItem('myArray');
// Parse it to something usable in js
array = JSON.parse(array); */

//************
// // Get the existing data
// var existing = localStorage.getItem('myFavoriteSandwich');

// // If no existing data, use the value by itself
// // Otherwise, add the new value to it
// var data = existing ? existing + ' and tuna' : 'tuna';

// // Save back to localStorage
// localStorage.setItem('myFavoriteSandwich', data);

// var points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a, b){return a - b});
// document.getElementById("demo").innerHTML = points;

//************

////////////////

if (startCard) {
    start.addEventListener("click", startQuiz);
}

function startQuiz () {
    start.removeEventListener("click", startQuiz);
    timerInterval = setInterval(quizTimer, 1000);
    setChoiceButtons();
    startCard.style.display = "none";
    question1.style.display = "block";
}

function quizTimer() {
    secondsLeft--;
    timeElement.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0 || (questionNumber == 5)) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }

function delay1000() {
    questionNumber++;
    setTimeout(nextQuestion, 711);
}

function nextQuestion() {
    quizQuestions[questionNumber - 1].style.display="none";
    quizQuestions[questionNumber].style.display="block";
    if (questionNumber < 5) {
        setChoiceButtons();
    }
    else if (questionNumber == 5) {
        setSubmitButton();
    }
}

function setChoiceButtons() {
    choiceA[questionNumber].addEventListener("click", choiceAResult);
    choiceB[questionNumber].addEventListener("click", choiceBResult);
    choiceC[questionNumber].addEventListener("click", choiceCResult);
    choiceD[questionNumber].addEventListener("click", choiceDResult);
}

function setSubmitButton() {
    submitBtn.addEventListener("click", storeScore);
}

function storeScore () {
    submitBtn.removeEventListener("click", storeScore);
    myScore.initials = initsField.value;
    myScore.personalScore = secondsLeft;
    highScores.push(myScore);
    
    console.log(highScores);
}

function wrongAnswer() {
    secondsLeft -= 10;
    choiceA[questionNumber].removeEventListener("click", choiceAResult);
    choiceB[questionNumber].removeEventListener("click", choiceBResult);
    choiceC[questionNumber].removeEventListener("click", choiceCResult);
    choiceD[questionNumber].removeEventListener("click", choiceDResult);
    result[questionNumber].innerHTML = "Wrong!";
    result[questionNumber].style.color = "red";
    result[questionNumber].style.fontWeight = "bold";
    result[questionNumber].style.fontSize = "20px";
}

function correctAnswer() {
    choiceA[questionNumber].removeEventListener("click", choiceAResult);
    choiceB[questionNumber].removeEventListener("click", choiceBResult);
    choiceC[questionNumber].removeEventListener("click", choiceCResult);
    choiceD[questionNumber].removeEventListener("click", choiceDResult);
    result[questionNumber].innerHTML = "Correct!";
    result[questionNumber].style.color = "#32CD32";
    result[questionNumber].style.fontWeight = "bold";
    result[questionNumber].style.fontSize = "20px";
}

function choiceAResult () {
    if (choiceA[questionNumber].classList.contains("wrong")) {
        wrongAnswer();
    } else {
        correctAnswer();
    }
    delay1000();
}

function choiceBResult () {
    if (choiceB[questionNumber].classList.contains("wrong")) {
        wrongAnswer();
    } else {
        correctAnswer();
    }
    delay1000();
}


function choiceCResult () {
    if (choiceC[questionNumber].classList.contains("wrong")) {
        wrongAnswer();
    } else {
        correctAnswer();
    }
    delay1000();
}

function choiceDResult () {
    if (choiceD[questionNumber].classList.contains("wrong")) {
        wrongAnswer();
    } else {
        correctAnswer();
    }
    delay1000();
}

function endQuiz () {
    scoreElement.textContent = "Your final score is " + secondsLeft;
}