
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
var result = document.getElementsByClassName("result")
var highScores= document.querySelector("#high-scores-list");
var timeElement = document.querySelector("#time");
var scoreElement = document.querySelector("#score");

var secondsLeft = 76;
var timerInterval;
var quizQuestions = [question1, question2, question3, question4, question5, finishCard];
var questionNumber = 0;
var highScores = [];

start.addEventListener("click", startQuiz);

function startQuiz () {
      timerInterval = setInterval(quizTimer, 1000);
      setButtons();
      startCard.style.display="none";
      question1.style.display="block";
}

function quizTimer() {
    secondsLeft--;
    timeElement.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0 || (questionNumber == 5)) {
      clearInterval(timerInterval);
    //   secondsLeft = 
      endQuiz();
    }
  }
  


function delay1000() {
    questionNumber++;
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    quizQuestions[questionNumber - 1].style.display="none";
    quizQuestions[questionNumber].style.display="block";
    if (questionNumber < 5) {
        setButtons();
    }
}

function setButtons() {
    choiceA[questionNumber].addEventListener("click", choiceAResult);
    choiceB[questionNumber].addEventListener("click", choiceBResult);
    choiceC[questionNumber].addEventListener("click", choiceCResult);
    choiceD[questionNumber].addEventListener("click", choiceDResult);
}

function wrongAnswer() {
    secondsLeft -= 10;
    result[questionNumber].innerHTML = "Wrong!";
    result[questionNumber].style.color = "red";
    result[questionNumber].style.fontWeight = "bold";
    result[questionNumber].style.fontSize = "20px";
}

function correctAnswer() {
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