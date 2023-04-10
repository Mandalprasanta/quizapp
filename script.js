const quizQuestions = [
    {
      question: "Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:",
      options: ["4.75%", "5.45%", "5%", "6.25%"],
      answerIndex: 1,
    },
    {
      question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
      options: [15, 16, 18, 25],
      answerIndex: 1,
    },
    {
      question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
      options: [3, 4, 5, 6],
      answerIndex: 2,
    },
    {
      question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
      options: [1090, 1160, 1190, 1200],
      answerIndex: 2,
    },
    {
      question: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
      options: ["Rs.18.20" ,"Rs.70", "Rs.72", "Rs.88.25"],
      answerIndex: 2,
    },
    {question: "What is the full form of HTML ...",
      options: ["Higher text markup language", "hidden text markup language", "height text markup language", "hiper text markup language"],
      answerIndex: 3,
  },
  { question: "A and B together have Rs. 1210. If  of A's amount is equal to  of B's amount, how much amount does B have?",
    options: ["460Rs", "484Rs", "550Rs", "664Rs"],
       answerIndex: 1,
  },
  { question: "A and B together have Rs. 1210. If  of A's amount is equal to  of B's amount, how much amount does B have?",
    options: ["460Rs", "484Rs", "550Rs", "664Rs"],
       answerIndex: 1,
  },
  { question: "A and B together have Rs. 1210. If  of A's amount is equal to  of B's amount, how much amount does B have?",
    options: ["460Rs", "484Rs", "550Rs", "664Rs"],
       answerIndex: 1,
  },
  { question: "A and B together have Rs. 1210. If  of A's amount is equal to  of B's amount, how much amount does B have?",
    options: ["460Rs", "484Rs", "550Rs", "664Rs"],
       answerIndex: 1,
  },
  ];
  
  const totalNumberOfQuestions = quizQuestions.length;
  let score = 0;
  let currentQuestionIndex = 0;
  
  const startButton = document.getElementById("start-button");
  const nextButton = document.getElementById("next-button");
  const questionCountDiv = document.getElementById("question-count");
  const scoreDiv = document.getElementById("score");
  
  const contentDiv = document.getElementsByClassName("content-div")[0];
  
  nextButton.style.visibility = "hidden";
  questionCountDiv.style.visibility = "hidden";
  scoreDiv.style.visibility = "hidden";
  
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextButtonHandler);
  
  function nextButtonHandler() {
    const userAnswer = document.querySelectorAll("[name='ans']:checked");
  
    if (userAnswer.length === 0) {
      contentDiv.style.backgroundColor = "maroon";
  
      return;
    }
  
    contentDiv.style.backgroundColor = "#333";
  
    calculateScore(userAnswer);
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex > totalNumberOfQuestions - 1) {
      //Last question has been reached. No more questions to display
  
      questionCountDiv.style.visibility = "hidden";
      scoreDiv.style.visibility = "hidden";
  
      contentDiv.innerHTML = `<div style="text-align:center;">You scored ${score} out of ${totalNumberOfQuestions}</div>`;
      nextButton.style.visibility = "hidden";
      return;
    }
  
    updateProgressBar();
  
    showQuestion();
  }
  
  function calculateScore(userAnswer) {
    quizQuestions[currentQuestionIndex].answerIndex;
  
    if (
      parseInt(userAnswer[0].value) ===
      quizQuestions[currentQuestionIndex].answerIndex
    ) {
      console.log("Correct Answer");
      score++;
    }
  }
  
  function startQuiz() {
    nextButton.style.visibility = "visible";
    questionCountDiv.style.visibility = "visible";
    scoreDiv.style.visibility = "visible";
    startButton.style.visibility = "hidden";
  
    updateProgressBar();
  
    showQuestion();
  }
  
  function showQuestion() {
    let questionHTML = `<div>${currentQuestionIndex + 1}) ${
      quizQuestions[currentQuestionIndex].question
    }</div>`;
  
    for (
      let index = 0;
      index < quizQuestions[currentQuestionIndex].options.length;
      index++
    ) {
      const option = quizQuestions[currentQuestionIndex].options[index];
  
      questionHTML =
        questionHTML +
        `<div>
                <input type="radio" name="ans" id="r${index}" value="${index}" />
                <label for="r${index}">${option}</label>
            </div>`;
    }
  
    contentDiv.innerHTML = questionHTML;
  }
  
  function updateProgressBar() {
    questionCountDiv.innerText = `Question ${
      currentQuestionIndex + 1
    }/${totalNumberOfQuestions}`;
  
    scoreDiv.innerText = `Score ${score}`;
  }