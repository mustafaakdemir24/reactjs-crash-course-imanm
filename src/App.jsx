import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";

function App() {
  return (
    <>
      <TodoTitle />
      <Todo task="Learn React" description="Code along and take notes" />
      <Todo task="Finish ASAP Frontend" description="3 hours every day" />
      <Todo
        task="Land a Junior Job"
        description="Apply to jobs to hours every day"
      />
      <Todo task="Earn $100k+" description="Live life and relax" />
      <Popup title="Are you %100 sure?" />
    </>
  );
}

export default App;
