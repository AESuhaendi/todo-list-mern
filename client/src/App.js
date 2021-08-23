import React from 'react'

function App() {
  const todos = [
    {
      _id: 1,
      action: "Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 "
    },
    {
      _id: 2,
      action: "Task 2"
    },
    {
      _id: 3,
      action: "Task 3"
    },
    {
      _id: 4,
      action: "Task 4"
    },
    {
      _id: 5,
      action: "Task 5"
    },
    {
      _id: 6,
      action: "Task 6"
    }
  ]

  return (
    <div>
      <div className="my-12 mx-3 sm:mx-auto sm:max-w-xl md:max-w-2xl space-y-6">
        <h1 className="text-white text-center text-6xl">
          Todo List
        </h1>
        <div className="bg-yellow-300 p-4 rounded grid grid-cols-1 space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Input new task..."
            className="sm:flex-1 py-2 px-4 rounded outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 transition-all"
          />
          <button
            title="Add new task"
            className="bg-yellow-600 hover:bg-yellow-500 focus:ring focus:ring-opacity-50 focus:outline-none focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-300 active:bg-yellow-700 rounded text-white px-4 py-2 uppercase transition-all"
          >Add Todo</button>
        </div>
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
                    title="Delete task"
                    className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-xs px-2 py-1 rounded-md transition-colors"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (<li className="text-white text-opacity-90">No Todo(s) left</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
