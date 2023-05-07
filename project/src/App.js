import './components/HomePage.css';
//import 'App.css';
import Quiz from "./components/Quiz";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;