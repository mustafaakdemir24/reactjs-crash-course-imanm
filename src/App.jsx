import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
import { useState, useEffect } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(true);
    console.log("parent notified");
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    console.log("ONLY when component mounts");
  }, []);

  useEffect(() => {
    console.log(`When component mounts AND ${popupOpen} changes.`);
  }, [popupOpen]);

  useEffect(() => {
    console.log("On EVERY render");
  });

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo togglePopup={togglePopup} task="Learn React" />
      <Todo togglePopup={togglePopup} task="Finish ASAP Frontend" />
      <Todo togglePopup={togglePopup} task="Land a Junior Job" />
      <Todo togglePopup={togglePopup} task="Earn $100k+" />
      {popupOpen && (
        <Popup closePopup={closePopup} title="Are you %100 sure?" />
      )}
    </>
  );
}

export default App;
