var viewScores = document.getElementById("scoreboard");

var timerEl = document.getElementById("timer");
var timeLeft = 75;

var quizIntro = document.getElementById("quiz-intro");
var startButton = document.getElementById("start-btn");

var quizContainer = document.getElementById("quizContainer");
var quizQuestions = [
  {
    question:
      "Which is the best practice for checking the functionality of your code as you build?",
    answers: [
      { options: "1. Ask a friend", answer: false },
      { options: "2. Check the browser", answer: false },
      { options: "3. Console.log your code", answer: true },
    ],
  },

  {
    question: "An array is what data type?",
    answers: [
      { options: "1. A list", answer: false },
      { options: "2. An object", answer: true },
      { options: "3. A string", answer: false },
    ],
  },

  {
    question: "Which comparison operator means equal in value and type?",
    answers: [
      { options: "1. ==", answer: false },
      { options: "2. =!", answer: false },
      { options: "3. ===", answer: true },
    ],
  },

  {
    question: "Flex flow is shorthand for which two style elements?",
    answers: [
      { options: "1. flex-direction and flex-wrap", answer: true },
      { options: "2. flex-wrap and flex-basis", answer: false },
      { options: "3. flex-start and flex-end", answer: false },
    ],
  },

  {
    question: "Which returns an array of attributes?",
    answers: [
      { options: "1. .document.querySelector", answer: false },
      { options: "2. .getElementById", answer: false },
      { options: "3. .document.querySelectorAll", answer: true },
    ],
  },
];
var questionIndex = 0;
var answersIndex = 0;
var optionsIndex = 0;

var questionEl = document.getElementById("question");
var optionButton1 = document.getElementById("option-btn-1");
var optionButton2 = document.getElementById("option-btn-2");
var optionButton3 = document.getElementById("option-btn-3");
var userAnswer = document.getElementsByClassName("user-answer");
var score = 0;
// console.log(userAnswer[0]);
var quizMessage = document.getElementById("quizMessage");

var userInitials = document.getElementById("userInitials");
var userScore = JSON.parse(localStorage.getItem("userScore"));
var scoreSubmit = document.getElementById("scoreSubmit-btn");

var returnButton = document.getElementById("return-btn");
var clearButton = document.getElementById("clear-btn");

//Start Quiz
function startGame() {
  quizIntro.classList.add("hide");
  quizContainer.classList.remove("hide");
}

//Start Timer
startButton.addEventListener("click", function () {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time:" + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  startGame();
  showQuestion();
  showOptions();
  // answerChoice();
});

//Show Question and Answer Options
function showQuestion() {
  questionEl.textContent = quizQuestions[questionIndex].question;

  // question.answers.forEach(answer => {
  // for (var i = 0; i < quizQuestions.length; i++) {
  //   // for (var j = 0; j < quizQuestions[i].length; j++) {
  //   //   console.log(quizQuestions[i][j].question);
  //   //   optionButton *= quizQuestions[i][j];
  //   //
}
// console.log(quizQuestions[i].question);

// console.log(quizQuestions[questionIndex]);
// console.log(quizQuestions[questionIndex].question);

function showOptions() {
  optionButton1.textContent = quizQuestions[answersIndex].answers[0].options;

  optionButton2.textContent = quizQuestions[answersIndex].answers[1].options;

  optionButton3.textContent = quizQuestions[answersIndex].answers[2].options;
}

// //Answer Message - Incorrect Answer Takes 10 secs From Timer
optionButton1.addEventListener("click", function () {
  if (
    quizQuestions[answersIndex].answers[0].answer == true ||
    quizQuestions[answersIndex].answers[1].answer == true ||
    quizQuestions[answersIndex].answers[2].answer == true
  ) {
    quizMessage.textContent = "Correct Answer";
  } else {
    // console.log("incorrect");
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
});

optionButton2.addEventListener("click", function () {
  if (
    quizQuestions[answersIndex].answers[0].answer == true ||
    quizQuestions[answersIndex].answers[1].answer == true ||
    quizQuestions[answersIndex].answers[2].answer == true
  ) {
    quizMessage.textContent = "Correct Answer";
  } else {
    // console.log("incorrect");
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
});

optionButton3.addEventListener("click", function () {
  if (
    quizQuestions[answersIndex].answers[0].answer == true ||
    quizQuestions[answersIndex].answers[1].answer == true ||
    quizQuestions[answersIndex].answers[2].answer == true
  ) {
    quizMessage.textContent = "Correct Answer";
  } else {
    // console.log("incorrect");
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
});

// questionIndex++;

//Move to Next Question
// function checkAnswer() {}
// optionsIndex++;
// questionIndex++;
//Save score with Timer at 0 with all questions answered

// //Save initials and Timer score
// function savedScores() {}

// scoreSubmit.addEventListener("click", function (event) {
//   event.preventDefault()
//   var initials = document.querySelector("#userInitials").value;
//   savedScores(initials);
// });

// //View Scoreboard
// viewScores.addEventListener("click", savedScores);

// //Return to Intro Page

// //Clear User Scores
