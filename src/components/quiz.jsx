import React, { useState } from "react";
import Results from "./results.jsx";
function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "JavaScript", "All"],
            answer: "All",
        },
                {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "JavaScript X", "Java XML", "None"],
            answer: "JavaScript XML",
        },
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    // // State to keep track of the selected option
    // const [optionSelected, setOptionSelected] = useState("None"); // when you change this value, the component will re-render

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion]; // null by default, option, re-runs every time userAnswers or currentQuestion changes

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers]; //... is the spread operator to avoid creating nested array
        newUserAnswers[currentQuestion] = option; // accesses element at current question

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            // If it's the last question, finish the quiz
            setIsQuizFinished(true);
        }
        else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        // Prevent going to a negative index
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        // need to restart the states back to initial values
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>; //child component of Quiz
    }
    return <div> 
        <h2> Question {currentQuestion + 1}</h2>
        <p className="question"> {questionBank[currentQuestion].question} </p>

        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}> {option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous </button>
            <button onClick={goToNext} disabled={!selectedAnswer}> 
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}</button>
        </div>
    </div>;
}

export default Quiz;