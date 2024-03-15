import React from "react"
import { FaRegCheckCircle } from "react-icons/fa"
import { MdOutlineDeleteOutline } from "react-icons/md"

export default function TodoItem({ item, deleteItem, completeItem, updateItemPriority }) {
  return (
    <div className="todo-item">
      {item.task}

      <div className="actions">
        <select
          value={item.priority}
          onChange={e => updateItemPriority(item.id, Number(e.target.value))}
          className="priority-select"
        >
          <option value={1}>High</option>
          <option value={2}>Medium</option>
          <option value={3}>Low</option>
        </select>
        <FaRegCheckCircle
          className="complete-cta"
          style={item.isCompleted ? { color: "green" } : { color: "white" }}
          onClick={() => completeItem(item.id)}
        />
        <MdOutlineDeleteOutline className="delete-cta" onClick={() => deleteItem(item.id)} />
      </div>
    </div>
  )
}
