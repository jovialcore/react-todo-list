import { useEffect, useState } from "react"
import TodoItem from "./_components/TodoItem"
import TodoForm from "./_components/TodoForm"
import "./App.css"

function App() {
  const [items, setItems] = useState([])

  const addItem = value => {
    let newItems = [
      ...items,
      { id: Math.floor(Math.random() * 1000), task: value, priority: 2, isCompleted: false },
    ]

    setItems(newItems)
    localStorage.setItem("items", JSON.stringify(newItems))
  }

  const deleteItem = id => {
    let itemsArr = [...items].filter(item => item.id !== id)
    setItems(itemsArr)
    localStorage.setItem("items", JSON.stringify(itemsArr))
  }

  const completeItem = id => {
    let itemsArr = [...items]
    itemsArr.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    setItems(itemsArr)
    localStorage.setItem("items", JSON.stringify(itemsArr))
  }

  const deleteCompletedItems = () => {
    let itemsArr = [...items].filter(item => !item.isCompleted)
    setItems(itemsArr)
    localStorage.setItem("items", JSON.stringify(itemsArr))
  }

  const updateItemPriority = (id, value) => {
    let itemsArr = [...items]
    itemsArr.map(item => {
      if (item.id === id) {
        item.priority = value
      }
      return item
    })
    setItems(itemsArr)
    localStorage.setItem("items", JSON.stringify(itemsArr))
  }

  useEffect(() => {
    let isMounted = true
    const items = localStorage.getItem("items")

    if (items) {
      isMounted && setItems(JSON.parse(items))
    } else {
      isMounted && setItems([])
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main>
      <div className="container">
        <h3>Todo</h3>

        <TodoForm addItem={addItem} />

        <div className="todo-list">
          {items.length > 0 &&
            items
              .sort((a, b) => a.priority - b.priority)
              .map((item, index) => (
                <TodoItem
                  key={index}
                  item={item}
                  index={index}
                  deleteItem={deleteItem}
                  completeItem={completeItem}
                  updateItemPriority={updateItemPriority}
                />
              ))}

          <button onClick={deleteCompletedItems} className="delete-completed">
            Delete Completed
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
