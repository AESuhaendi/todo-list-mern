import React from 'react'
import Input from './components/Input';

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
        <Input />
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
