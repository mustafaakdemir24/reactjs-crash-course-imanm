function Todo({ task }) {
  const deleteHandler = () => {
    console.log(`Delete ${task[0]}`);
  };

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={() => deleteHandler()}>Delete</button>
    </div>
  );
}

export default Todo;
