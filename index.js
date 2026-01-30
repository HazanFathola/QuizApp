const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hannover",
        correct: false,
      },
      {
        id: "d",
        text: "Hamburg",
        correct: false,
      },
    ],
  },
];
function renderNewQuestion() {
  const question = questions[0];

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  const newDisplay = document.getElementById("question-display");
  newDisplay.innerHTML = "";
  newDisplay.appendChild(questionDiv);
  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);

  //newDisplay.appendChild(questionTitle);
}
