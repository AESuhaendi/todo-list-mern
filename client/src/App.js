import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Input from './components/Input';
import ListTodo from './components/ListTodo';
import Loading from './components/Loading';

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Todos: ", todos);
  }, [todos])

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/todos')
      if (res.data) {
        console.log(res.data);
        setTodos(res.data)
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const deleteTodo = async (id) => {
    setLoading(true)
    try {
      const res = await axios.delete('/api/todos/' + id)
      if (res.data) {
        console.log(res.data);
        setTodos(todos.slice().filter(todo => todo._id !== res.data._id))
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const addTodo = async (action) => {
    setLoading(true)
    try {
      const res = await axios.post('/api/todos/', { action })
      if (res.data) {
        console.log(res.data);
        setTodos([...todos, res.data])
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="my-12 mx-3 sm:mx-auto sm:max-w-xl md:max-w-2xl space-y-6">
        <h1 className="text-white text-center text-6xl">
          Todo List
        </h1>
        <Input addTodo={addTodo} />
        {!loading ? <ListTodo todos={todos} onDeleteTodo={deleteTodo} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
