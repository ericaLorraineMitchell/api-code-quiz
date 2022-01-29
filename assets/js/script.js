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
    option1: "1. Ask a friend",
    option2: "2. Check the browser",
    option3: "3. Console.log your code",
    option4: "4. Look at W3Schools",
    answer: "3. Console.log your code",
  },

  {
    question: "An array is what data type?",
    option1: "1. A list",
    option2: "2. An object",
    option3: "3. A string",
    option4: "4. A boolean",
    answer: "2. An object",
  },

  {
    question: "Which comparison operator means equal in value and type?",
    option1: "1. ==",
    option2: "2. =!",
    option3: "3. ===",
    option4: "4. !==",
    answer: "3. ===",
  },

  {
    question: "Flex-flow is shorthand for which two style elements?",
    option1: "1. flex-direction and flex-wrap",
    option2: "2. flex-wrap and flex-basis",
    option3: "3. flex-start and flex-end",
    option4: "4. align-items and justify-content",
    answer: "1. flex-direction and flex-wrap",
  },

  {
    question: "Which returns an array of attributes?",
    option1: "1. .document.querySelector",
    option2: "2. .getElementsByClassName",
    option3: "3. .getElementById",
    option4: "4. .document.querySelectorAll",
    answer: "4. .document.querySelectorAll",
  },
];
var questionIndex = 0;

var questionEl = document.getElementById("question");
var optionButton1 = document.getElementById("option-btn-1");
var optionButton2 = document.getElementById("option-btn-2");
var optionButton3 = document.getElementById("option-btn-3");
var optionButton4 = document.getElementById("option-btn-4");
var userAnswer = document.getElementsByClassName("user-answer");
var score = 0;

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
  // nextQuestion();
});

//Show Question and Answer Options
function showQuestion() {
  questionEl.textContent = quizQuestions[questionIndex].question;
}

function showOptions() {
  optionButton1.textContent = quizQuestions[questionIndex].option1;
  optionButton2.textContent = quizQuestions[questionIndex].option2;
  optionButton3.textContent = quizQuestions[questionIndex].option3;
  optionButton4.textContent = quizQuestions[questionIndex].option4;
}

// Answer Message - Incorrect Answer Takes 10 secs From Timer

optionButton1.addEventListener("click", function (event) {
  userAnswer = event.target.textContent;

  if (userAnswer === quizQuestions[questionIndex].answer) {
    quizMessage.textContent = "Correct Answer";
  } else {
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
  questionIndex++;
  showQuestion();
  showOptions();
});

optionButton2.addEventListener("click", function (event) {
  userAnswer = event.target.textContent;

  if (userAnswer === quizQuestions[questionIndex].answer) {
    quizMessage.textContent = "Correct Answer";
  } else {
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
  questionIndex++;
  showQuestion();
  showOptions();
});

optionButton3.addEventListener("click", function (event) {
  userAnswer = event.target.textContent;

  if (userAnswer === quizQuestions[questionIndex].answer) {
    quizMessage.textContent = "Correct Answer";
  } else {
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
  questionIndex++;
  showQuestion();
  showOptions();
});

optionButton4.addEventListener("click", function (event) {
  userAnswer = event.target.textContent;

  if (userAnswer === quizQuestions[questionIndex].answer) {
    quizMessage.textContent = "Correct Answer";
  } else {
    quizMessage.textContent = "Incorrect";

    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    timerEl.textContent = timeLeft;
  }
  completeQuiz();
});

function completeQuiz() {
  quizContainer.classList.add("hide");
  userScore.classList.add("show");
}

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
