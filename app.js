//setting variables

var score = 0;
var playerName = " ";
var ansCorrect = " ";
var ansWrong = " ";






//question structure to build off

question1: "Commonly used data types DO NOT include:"
answers1: [
    { text: "strings", isCorrect: false},
    { text: "booleans", isCorrect: false},
    { text: "alerts", isCorrect: true },
    { text: "numbers", isCorrect: false},
    
];

question2: "The condition in an if/else statement is enclosed within _____"
answers2: [
    { text: "quotes", isCorrect: false },
    { text: "curly brackets", isCorrect: false},
    { text: "parentheses", isCorrect: true},
    { text: "square brackets", isCorrect: false},
];

question3: "Arrays in JavaScript can be used to store _____"
answers3: [
    { text: "numbers and strings", isCorrect: false},
    { text: "other arrays", isCorrect: false},
    { text: "booleans", isCorrect: false},
    { text: "all of the above", isCorrect: true },
    
];

question4: "String values must be enlosed within _____ when being assigned to variables."
answers4: [
    { text: "commas", isCorrect: false},
    { text: "curly brackets", isCorrect: false},
    { text: "quotes", isCorrect: true },
    { text: "parentheses", isCorrect: false},
    
];

question5: "A very useful tool used during development and debugging for printing content to the debugger is:"
answers5: [
    { text: "javascript", isCorrect: false},
    { text: "terminal/bash", isCorrect: false},
    { text: "for loops", isCorrect: false},
    { text: "console.log", isCorrect: true },
    
];

// Below is ripped from a class activity and still needs work.


var count = 1;
var timer;

var $time = document.querySelector(".time");
var $start = document.querySelector("#start");
var $stop = document.querySelector("#stop");

$start.addEventListener("click", function(e) {
  running = false;
  if (running) return;
  running = true;
  timer = setInterval(function() {
    $time.textContent = count++;
  }, 1000);
});

$stop.addEventListener("click", function(e){
  running = false;
  clearInterval(timer);
});


