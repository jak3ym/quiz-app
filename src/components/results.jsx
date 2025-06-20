
function Results({ questionBank, userAnswers, restartQuiz}) {
    // console.log(questionBank, userAnswers);
    function getScore() {
        let finalScore = 0;
        userAnswers.forEach((userAnswer, index) => {
            if (userAnswer === questionBank[index].answer) {
                finalScore++;
            }
        })
        return finalScore;
    }
    const score = getScore();

    return <div> <h2> Quiz Completed!</h2>
    <p> Your Score: {score}/{questionBank.length}</p>
    <button className="restart-button" onClick={restartQuiz}> Restart Quiz</button>
    </div>
}

export default Results;