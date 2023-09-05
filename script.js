const quizData = [
    {
        question: "What does JSON stand for?",
        a: "Javascript Object Notation",
        b: "Javascript Orientation Notation",
        c: "Javascript Object Notary",
        d: "Java Sequence Orientation Notation",
        correct: "a",
    },
    {
        question: "What can be used to style a webpage?",
        a: "Javascipt",
        b: "HTML",
        c: "CSS",
        d: "Java",
        correct: "c",
    },

    {question: "Which of these is not a HTML tag?" ,
        a: "<div>",
        b: "<input>",
        c: "<label>",
        d: "<stop>",
        correct: "d",
    
    }    
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadquiz();

function loadquiz(){
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}