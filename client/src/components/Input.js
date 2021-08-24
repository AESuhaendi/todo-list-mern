import React, { useEffect, useRef, useState } from 'react'

const Input = ({ addTodo }) => {
  const [action, setAction] = useState('')
  const [disabled, setDisabled] = useState(false)
  const refInput = useRef()

  useEffect(() => {
    refInput.current.focus()
  }, [])

  const handleAddTodo = async () => {
    if (/^\s*$/.test(action)) {
      setAction('')
      refInput.current.focus()
      return
    }
    setDisabled(true)
    await addTodo(action.trim())
    setAction('')
    setDisabled(false)
  }

  return (
    <div className="bg-yellow-300 p-4 rounded grid grid-cols-1 space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
      <input
        disabled={disabled}
        ref={refInput}
        value={action}
        onChange={(e) => setAction(e.target.value)}
        type="text"
        placeholder="Input new task..."
        className="sm:flex-1 py-2 px-4 rounded outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 transition-all"
      />
      <button
        disabled={disabled}
        onClick={handleAddTodo}
        title="Add new task"
        className="bg-yellow-600 hover:bg-yellow-500 focus:ring focus:ring-opacity-50 focus:outline-none focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-300 active:bg-yellow-700 rounded text-white px-4 py-2 uppercase transition-all"
      >Add Todo</button>
    </div>
  )
}

export default Input