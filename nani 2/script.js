const quizData = [
    {
        question: "Who won the first T20 World Cup?",
        a: "Sri Lanka",
        b: "USA",
        c: "India",
        d: "Canada",
        correct: "c"
    },
    {
        question: "Which country has won the Cricket World Cup three times in a row?",
        a: "South Africa",
        b: "India",
        c: "England",
        d: "Australia",
        correct: "d"
    },
    {
        question: "How many times has India won the ICC World Cup?",
        a: "2",
        b: "1",
        c: "4",
        d: "3",
        correct: "a",
    },
    {
        question: "Who is known as the Flying Sikh of India?",
        a: "Usain Bolt",
        b: "Milkha Singh",
        c: "Sandeep Singh",
        d: "Navjot Singh",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});