import React from "react"
import Todo from "./Todo"

function TodoList(props) {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <Todo
          key={index}
          index={index}
          task={task}
          onToggleComplete={props.onToggleComplete}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
