import React from "react"

function Todo(props) {
  const handleCompleteClick = () => {
    props.onToggleComplete(props.index)
  }

  return (
    <li>
      <span
        style={{
          textDecoration: props.task.completed ? "line-through" : "none",
        }}
      >
        {props.task.text}
      </span>
      <button onClick={handleCompleteClick}>
        {props.task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
    </li>
  )
}

export default Todo
