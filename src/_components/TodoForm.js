import React, { useState } from "react"

export default function TodoForm({ addItem }) {
  const [value, setValue] = useState("")

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return

    addItem(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  )
}
