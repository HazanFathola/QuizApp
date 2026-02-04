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
  {
    id: 2,
    question: "Was ist die Hauptstadt von Brasilien?",
    answers: [
      {
        id: "a",
        text: "Rio de Janeiro",
        correct: false,
      },
      {
        id: "b",
        text: "Brasilia",
        correct: true,
      },
      {
        id: "c",
        text: "Salvador",
        correct: false,
      },
      {
        id: "d",
        text: "Sao Paolo",
        correct: false,
      },
    ],
  },
];
let currentQuestion;
let currentQuestionPointer = -1;

function renderQuestion(question) {
  //const question = questions[0];
  // zur weiterleitung auf die nächste Frage evtl. Tracker nutzen mit if/else im Bezug auf list.length i++

  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  question.answers.forEach((answer) => {
    const answerBtn = document.createElement("button");
    answerBtn.classList.add("answer");
    answerBtn.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerBtn);
  });

  document.getElementById("question-display").appendChild(questionDiv);
  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);
}

function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
  //currentQuestion.answers[0].correct;
}
function checkAnswer(value) {
  console.log(currentQuestion.answers);
  // currentQuestion.answers.forEach((answer) => {
  //   if (value === answer.id) {
  //     console.log(id.correct);
  //   }
  // });
  const result = currentQuestion.answers.find((answer) => {
    return answer.id === value;
  });
  if (result.correct === true) {
    event.target.classList.add("correct");
  } else {
    event.target.classList.add("incorrect");
  }
}
