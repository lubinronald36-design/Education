const questions = [
    { question: "I don't have no money.", answer: "I don't have any money." },
    // Add the remaining 49 questions here...
];

let currentQuestion = 0;
let userAnswers = [];

document.getElementById("question").innerText = questions[currentQuestion].question;
document.getElementById("progress").innerText = Question ${currentQuestion + 1} of ${questions.length};

document.getElementById("submit").addEventListener("click", () => {
    const userAnswer = document.getElementById("answer").value;
    userAnswers.push(userAnswer);
    document.getElementById("answer").value = "";
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").innerText = questions[currentQuestion].question;
        document.getElementById("progress").innerText = Question ${currentQuestion + 1} of ${questions.length};
    } else {
        showResults();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").innerText = questions[currentQuestion].question;
        document.getElementById("progress").innerText = Question ${currentQuestion + 1} of ${questions.length};
        document.getElementById("answer").value = "";
    }
});

function showResults() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".progress-container").style.display = "none";
    document.querySelector(".results-container").style.display = "block";
    const resultsList = document.getElementById("results");
    questions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = Question ${index + 1}: ${question.question} | Your answer: ${userAnswers[index]} | Correct answer: ${question.answer};
        resultsList.appendChild(listItem);
    });
}
