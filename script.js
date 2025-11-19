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

document.getElementById("submit").addEventListener("click", () => {
  userAnswers.push(getUserAnswer());
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResults();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    userAnswers.push(getUserAnswer());
    currentQuestion++;
    displayQuestion();
  }
});

displayQuestion();
