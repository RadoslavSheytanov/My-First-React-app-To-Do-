import React, { useState } from "react"

function TodoForm(props) {
  const [input, setInput] = useState("")

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (input.trim()) {
      // ensure task is not empty
      props.onAddTask(input)
      setInput("") // clear input field
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
