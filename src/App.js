import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Home Tool Markup Language", isCorrect: false },
        { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
        { answerText: "Hyperlinking Textual Markup Language", isCorrect: false },
      ],
    },
    {
      questionText: "Which language is used for styling web pages?",
      answerOptions: [
        { answerText: "HTML", isCorrect: false },
        { answerText: "JQuery", isCorrect: false },
        { answerText: "CSS", isCorrect: true },
        { answerText: "XML", isCorrect: false },
      ],
    },
    {
      questionText: "Which is a JavaScript framework?",
      answerOptions: [
        { answerText: "React", isCorrect: true },
        { answerText: "Django", isCorrect: false },
        { answerText: "Flask", isCorrect: false },
        { answerText: "Laravel", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
