import './Quiz.css';
import { useState } from "react";
import questions from "./Questions";
import Calculate from "./Calculate";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [scores, setScores] = useState(new Array(questions.length).fill(0));
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState(new Array(questions.length).fill({ points: 0 }));

    const optionClicked = (points) => {
        // Increment the score
        const updatedScores = [...scores];
        updatedScores[currentQuestion] = points;
        setScore(score + points);
        setScores(updatedScores);

        // Update the corresponding answer in the answers array
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion].points = points;
        setAnswers(updatedAnswers);
        console.log(answers[currentQuestion].points);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartGame = () => {
        setShowResults(false);
        setCurrentQuestion(0);
        setScore(0);

        // Reset the answers array
        const resetAnswers = [...answers];
        resetAnswers.forEach((answer) => answer.points = 0);
        setAnswers(resetAnswers);
    };

    const goingBack = () => {
        if (currentQuestion > 0) {
            setScore(score - scores[currentQuestion - 1]);
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div className="App">
            {/* 1. Header  */}
            <h1 className="text-background">Sustainability Quiz</h1>

            {/* 3. Show results or show the question game  */}
            {showResults ? (
                /* 4. Final Results */
                <div className="final-results">
                    <h1 className="text-background">Final Results</h1>
                    <h2 className="text-background">

                        Your sustainability score is&nbsp;
                        {Math.round((score / (questions.length * 3)) * 100)}%!<br />
                        {Math.round((score / (questions.length * 3)) * 100) < 100
                            ? "Find out how to improve your score here"
                            : "Keep up the good work! Continue to keep track of your habits here"}
                    </h2>
                    <button variant="contained" onClick={() => restartGame()}>Restart game</button>
                </div>
            ) : (
                /* 5. Question Card  */
                <div className="question-card">
                    {/* Current Question  */}
                    <h2 className="text-background">
                        Question: {currentQuestion + 1} out of {questions.length}
                    </h2>
                    <h3 className="text-background">{questions[currentQuestion].text}</h3>
                    {/* List of possible answers  */}
                    <div className="options-container">
                        {questions[currentQuestion].options.map((option) => {

                            return (
                                <div
                                    key={option.id}
                                    onClick={() => optionClicked(option.points)}
                                    className="option"
                                >
                                    {option.text}
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={() => goingBack()}>Back</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
