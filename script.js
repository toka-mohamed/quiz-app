const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Horse", correct: false },
            { text: "Falcon", correct: false }
        ]
    },
    {
        question: "Which is the tallest animal?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Kangaroo", correct: false },
            { text: "Zebra", correct: false }
        ]
    },
    {
        question: "Which is the largest mammal?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    }
// Add more questions as needed...
];
let score=0;
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerbuttons');
let nextBtn = document.getElementById('nextbtn');
let currentQuestionIndex = 0;

function start() {
    currentQuestionIndex = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", select);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function select(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
    });
    nextBtn.style.display = "block"; 
}
function handelnextbtn(){

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
 showQuestion();
    }else{
        showscore();
    }
}

function showscore(){
resetState();
    questionElement.innerHTML = `the score is ${score}`;

    nextBtn.innerHTML="try again"
    nextBtn.style.display = "block"; 
}

nextBtn.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {

        handelnextbtn();
        } else {
        start();// Hide next button
    }
});

// Start the quiz
start();
