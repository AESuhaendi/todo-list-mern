import React from 'react'

const ListTodo = ({ todos, onDeleteTodo }) => {

  const handleDeleteTodo = (id, e) => {
    e.target.disabled = true
    onDeleteTodo(id)
  }

  return (
    <ul className="bg-yellow-300 p-4 rounded space-y-3">
      {todos && todos.length > 0
        ? (
          todos.map(todo => (
            <li
              key={todo._id}
              className="flex items-start p-4 text-white bg-yellow-500 rounded-lg shadow"
            >
              <span className="flex-1">
                {todo.action}
              </span>
              <button
                onClick={(e) => handleDeleteTodo(todo._id, e)}
                title="Delete task"
                className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-xs px-2 py-1 rounded-md transition-colors"
              >
                X
              </button>
            </li>
          ))
        ) : (<li className="text-white text-opacity-90 text-center">No Todo(s) left</li>)
      }
    </ul>
  )
}

export default ListTodo