import React from 'react'
import Input from './components/Input';
import ListTodo from './components/ListTodo';

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
        <ListTodo todos={todos} />
      </div>
    </div>
  );
}

export default App;
