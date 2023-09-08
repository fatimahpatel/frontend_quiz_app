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
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];
    
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    return currentQuizData;

}

// This function deselects the answers when the next question appears
// .checked picks up answer that has been picked
function deselectAnswers() {
    answerElements.forEach(answerElement => answerElement.checked = false)
}

//attempt by myself before watching tutorial
//need to loop through each answer return the one that is selected
//then we need to match that with the correct answer
//

function correctAnswer(answerElement, currentQuizData){
    if (answerElement.id === currentQuizData.correct){
        // score++;
        console.log("correct");
        // console.log(score);
    }
    else{
        console.log("incorrect")
    }
}


submitButton.addEventListener('click', (currentQuizData) =>{
    
    answerElements.forEach((answerElement) => {
        if (answerElement.checked){
            correctAnswer(answerElement, currentQuizData)
        }
    })}
)