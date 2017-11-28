//Display trivia questions and choices
(function() {

    var myQuestions = [
        {
            question: "What is the definition of HTML?",
            answers: {
                a: "hyper text markup language",
                b: "hyper text makeup lingual",
                c: "hype text makes langauges",
                d: "I dont know"
            },
                correctAnswer: "a"
        },
        {
            question: "What is the best site ever created?",
            answers: {
                a: "FaceBook",
                b: "Yahoo.com",
                c: "geocities.com",
                d: "this quiz"
        },
                correctAnswer: "d"
        },
        {
            question: "What is JavaScript",
            answers: {
                a: "Coffee Language",
                b: "A script found on the island of Java",
                c: "A scripting programing language used for Web Development",
                d: "What this quiz is made with"
        },
                correctAnswer: "d, c"
        }
    ];

// display quiz right away

//buildQuiz();

// on submit, show results
//submitButton.addEventListener('click', showResults);
})();
    
//grab HTML tags and store refs

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('answers');
var submitButton = document.getElementById('buttons');


//functions for building quiz
//function buildQuiz() {

    
    //For each question
   //myQuestions.forEach (
        //(currentQuestion,questionNumber) => {
            //grabs answers list here
            //var answers = [];
        //} 
    //)
//}

function showResults(){}

