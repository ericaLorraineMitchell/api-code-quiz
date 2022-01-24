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

var score = 0;

var timer = document.querySelector(".timer");
var timeLeft = 75;

