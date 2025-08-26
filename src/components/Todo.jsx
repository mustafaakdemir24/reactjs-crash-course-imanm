function Todo({ task, description }) {
  console.log({ task });

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
