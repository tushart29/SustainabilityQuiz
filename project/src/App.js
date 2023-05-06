import './App.css';
import { useState } from "react";
import questions from "./components/Questions";
import Navbar from "./components/Navbar";
import { Link } from 'react-';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const scores = [];
  const [showResults, setShowResults] = useState(false);

  const optionClicked = (points) => {
    // Increment the score
    score[currentQuestion] = points;
    setScore(score + points);

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
  };

  // const navigate = useNavigate();

  // const learnMore = () => {
  //   navigate('ToDoList')
  // };

  const goingBack = () => {
    if (currentQuestion > 0) {
      //setScore(previousScore);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="App">
      <Navbar />
      {/* 1. Header  */}
      <h1 class="text-background">Sustainability Quiz</h1>

      {/* 2. Current Score FOR DEBUGGING, DELETE LATER */}
      <h2 class="text-background">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 class="text-background">Final Results</h1>
          <h2 className="text-background">
            Your sustainability score is&nbsp;
            {Math.round((score / (questions.length * 3)) * 100)}%!<br />
            {Math.round((score / (questions.length * 3)) * 100) < 100
              ? "Find out how to improve your score here"
              : "Keep up the good work! Continue to keep track of your habits here"}
            {/*Learn more about your score here*/}
            {/*<button onClick={() => learnMore()}>Click here to learn how to improve your score! </button>*/}

            {/*<Link to={"./components/ToDoList"}>Click here to learn more</Link>*/}

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

export default App;
