
var start = document.getElementById("start-button");
var startCard = document.getElementById("start-card");
var question = document.getElementById("question");
var question1 = document.getElementById("question1-card");
var question2 = document.getElementById("question2-card");
var question3 = document.getElementById("question3-card");
var question4 = document.getElementById("question4-card");
var question5 = document.getElementById("question5-card");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD= document.getElementById("D");
var answerButton = document.getElementById("answer-button");
var highScores= document.getElementById("high-scores-list");
var timeElement = document.getElementById("time");
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


start.addEventListener("click", startQuiz);

function startQuiz () {
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeElement.textContent = "Time: " + secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // quizEnd();
          //   alert("Time's Up!");
          }
        }, 1000);
      }
      setTime();
      startCard.style.display="none";
      question1.style.display="block";
    //   getQuestion();

}




// var lastQuestionIndex = quizQuestions.length-1;
// var runningQuestionIndex = 0;


// function getQuestion () {
//     startCard.style.display="none";  
//     question1.style.display="block";

//     let q = quizQuestions[runningQuestionIndex];
//     question.innerHTML = "<p>" + q.question + "</P>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
//     choiceD.innerHTML = q.choiceD; 
// }

// runningQuestionIndex = 0;
// getQuestion ()

// runningQuestionIndex++
// getQuestion ()

// answerBtn.addEventListener("click", getQuestion);


// function correctAnswer () {
    
    
// }

// function wrongAnswer () {
   
    
// }

    // for(var i = 0; i < quizQuestions.length; i++) {
    //     var currentQuestion = quizQuestions [i];
    //     currentQuestion.style.display="block";
    // }




// function answerCheck (answer) {
//     if (quizQuestions[runningQuestionIndex].correct == answer){
//         document.getElementByClass("result").innerHTML = "Correct!";
//     } else {
//         document.getElementByClass("result").innerHTML = "Wrong!";
//         secondsLeft-10;
//     }

//     if (runningQuestionIndex < lastQuestionIndex) {
//         runningQuestionIndex++;
//         getQuestion();
//     } else {
//         clearInterval(timerInterval);
//         quizEnd ();
//     }

    // function quizEnd () {
        // won't be called until run out of questions or run out of time
        // }
        
        // var questionsElement = document.getElementById("questions");
        // var choicesElement = document.getElementById("choices");

// each button is a class called choices, we'll grab the value attribute to see if value = ..... check that with currentQuestion.answer
//     }

// answerButton.addEventListener("click", answerCheck);

// var highScores = [];





 




// document.getElement
 
    
