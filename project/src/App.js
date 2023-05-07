import Home from './components/Home';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';

function App() {
  let component
  switch (window.location.pathname) {
    default:
      component = <Home />
      break
    case "/quiz":
      component = <Quiz />
      break
    case "/todo":
      component = <ToDoList />
      break
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;