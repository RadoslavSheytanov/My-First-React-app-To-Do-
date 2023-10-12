import React, { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }])
  }

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.slice()
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index)
    setTasks(newTasks)
  }

  return (
    <div>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
