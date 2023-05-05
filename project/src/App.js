import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div class="App">
      <h1>Welcome to my app</h1>

      <h2>
        Your current score is:
      </h2>

      <div className="QuizQuestionCards">
        <div class="card">
          <h2>The question you're on right now: Question 1</h2>

          <h2 className="QuizQuestion"> Quiz Question  </h2>

          <ul class="Answers">
            <li>Answer 1,</li>
            <li>Answer 2,</li>
            <li>Answer 3,</li>
            <li>Answer 4</li>
          </ul>

        </div>
      </div>
      <MyButton />

      <div className="FinalResultTab">
        <h1> Your score: </h1>

        <h2>You got a score of 80%</h2>

        {/*<button onClick={() => restartGame()}>Retake the Quiz</button>*/}



      </div>
    </div>
  );
}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Hackathon Quiz
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;



